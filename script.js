/*
    Portfolio Logic
    - Typing Animation
    - Scroll Reveals
    - Mobile Menu
    - Form Handling
*/

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------
    // 1. TYPING EFFECT
    // ----------------------------------------------------------------
    const typingElement = document.querySelector('.typing-text');
    const phrases = [
        "Business Strategy",
        "Product Roadmaps",
        "Technical Solutions",
        "Data-Driven Decisions"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; // Faster deleting
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80; // Normal typing
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new phrase
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing if element exists
    if (typingElement) type();


    // ----------------------------------------------------------------
    // 2. SCROLL REVEAL ANIMATION (Intersection Observer)
    // ----------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only trigger once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is effectively visible
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // ----------------------------------------------------------------
    // 3. NAVBAR SCROLL EFFECT
    // ----------------------------------------------------------------
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled', 'border-b', 'border-white/10');
            navbar.classList.remove('border-transparent');
        } else {
            navbar.classList.remove('scrolled', 'border-b', 'border-white/10');
            navbar.classList.add('border-transparent');
        }
    });


    // ----------------------------------------------------------------
    // 4. MOBILE MENU
    // ----------------------------------------------------------------
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = menuBtn.querySelector('i');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden'; // Lock scroll

            // Stagger animation manually via JS Class toggle is cleaner in CSS but this ensures trigger
            setTimeout(() => mobileMenu.classList.add('active'), 50);

        } else {
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto'; // Unlock scroll
        }
    });

    // Close menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        });
    });


    // ----------------------------------------------------------------
    // 5. THEME TOGGLE (Optional)
    // ----------------------------------------------------------------
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');

    // Check saved theme
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark'); // Default
        }
    });


    // ----------------------------------------------------------------
    // 6. FORM MOCK SUBMISSION
    // ----------------------------------------------------------------
    const form = document.getElementById('contact-form');
    const formMsg = document.getElementById('form-msg');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            btn.textContent = 'Sending...';
            btn.disabled = true;
            btn.classList.add('opacity-70', 'cursor-not-allowed');

            setTimeout(() => {
                btn.textContent = 'Message Sent';
                btn.classList.remove('from-indigo-500', 'to-purple-600');
                btn.classList.add('bg-green-500'); // Simple override

                formMsg.textContent = "Thank you! I'll be in touch shortly.";
                formMsg.classList.remove('hidden');
                formMsg.classList.add('text-green-400', 'mt-4');

                form.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-70', 'cursor-not-allowed', 'bg-green-500');
                    btn.classList.add('from-indigo-500', 'to-purple-600');
                    formMsg.classList.add('hidden');
                }, 4000);

            }, 1500);
        });
    }

});
