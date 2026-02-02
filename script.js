/* 
   --------------------------------------------------------
   PREMIUM PORTFOLIO STYLES
   Designed for Visual Impact & Professional Credibility
   --------------------------------------------------------
*/

:root {
    /* Color Palette - Slate & Indigo */
    --bg-main: #020617;
    /* Slate 950 */
    --bg-secondary: #0f172a;
    /* Slate 900 */
    --text-primary: #f8fafc;
    /* Slate 50 */
    --text-secondary: #94a3b8;
    /* Slate 400 */
    --brand-indigo: #6366f1;
    --brand-purple: #a855f7;

    /* Effects */
    --glass-border: rgba(255, 255, 255, 0.08);
    --glass-bg: rgba(15, 23, 42, 0.6);
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-glow: 0 0 20px rgba(99, 102, 241, 0.3);
}

/* Light Mode Overrides (Optional Toggle) */
body.light-mode {
    --bg-main: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --glass-border: rgba(0, 0, 0, 0.1);
    --glass-bg: rgba(255, 255, 255, 0.7);
}

/* Reset & Base */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-main);
    color: var(--text-secondary);
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
}

h1,
h2,
h3,
h4,
.font-heading {
    font-family: 'Outfit', sans-serif;
    color: var(--text-primary);
}

/* Utilities */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.text-gradient {
    background: linear-gradient(to right, var(--brand-indigo), var(--brand-purple));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* 
   --------------------------------------------------------
   TAILWIND-LIKE UTILITIES (Recreated in Vanilla CSS)
   For explicit control without library dependency
   --------------------------------------------------------
*/
.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.fixed {
    position: fixed;
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.z-0 {
    z-index: 0;
}

.z-10 {
    z-index: 10;
}

.z-20 {
    z-index: 20;
}

.z-50 {
    z-index: 50;
}

.flex {
    display: flex;
}

.grid {
    display: grid;
}

.hidden {
    display: none;
}

.block {
    display: block;
}

.flex-col {
    flex-direction: column;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.justify-end {
    justify-content: flex-end;
}

.gap-3 {
    gap: 0.75rem;
}

.gap-6 {
    gap: 1.5rem;
}

.gap-8 {
    gap: 2rem;
}

.gap-12 {
    gap: 3rem;
}

.w-full {
    width: 100%;
}

.h-full {
    height: 100%;
}

.min-h-screen {
    min-height: 100vh;
}

.max-w-7xl {
    max-width: 80rem;
}

.max-w-4xl {
    max-width: 56rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.p-4 {
    padding: 1rem;
}

.p-8 {
    padding: 2rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
}

.pt-20 {
    padding-top: 5rem;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.text-white {
    color: white;
}

.text-slate-400 {
    color: #94a3b8;
}

.text-slate-500 {
    color: #64748b;
}

.text-indigo-400 {
    color: #818cf8;
}

.text-purple-400 {
    color: #c084fc;
}

.font-bold {
    font-weight: 700;
}

.font-medium {
    font-weight: 500;
}

.text-5xl {
    font-size: 3rem;
}

.text-xl {
    font-size: 1.25rem;
}

/* Desktop Grid */
@media (min-width: 768px) {
    .md\:flex {
        display: flex;
    }

    .md\:flex-row {
        flex-direction: row;
    }

    .md\:grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .md\:w-5\/12 {
        width: 41.666667%;
    }

    .md\:block {
        display: block;
    }

    .md\:hidden {
        display: none;
    }

    .md\:pl-12 {
        padding-left: 3rem;
    }

    .md\:text-left {
        text-align: left;
    }
}

@media (min-width: 1024px) {
    .lg\:grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .lg\:order-1 {
        order: 1;
    }

    .lg\:order-2 {
        order: 2;
    }
}


/* 
   --------------------------------------------------------
   COMPONENTS
   --------------------------------------------------------
*/

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 2rem;
    border-radius: 9999px;
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-primary {
    background: linear-gradient(135deg, var(--brand-indigo), var(--brand-purple));
    color: white;
    box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
}

.btn-outline {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: var(--text-primary);
}

.btn-outline:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--brand-indigo);
}

/* Tags */
.skill-tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    font-size: 0.85rem;
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.skill-tag:hover {
    border-color: var(--brand-indigo);
    background: rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
}

/* Headings */
.section-heading {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    display: inline-block;
    background: linear-gradient(to right, white, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


/* 
   --------------------------------------------------------
   ANIMATIONS
   --------------------------------------------------------
*/

/* Fade Up */
.animate-fade-up {
    animation: fadeUp 1s ease-out forwards;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Pulse Slow */
.animate-pulse-slow {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.5;
    }
}

/* Float */
.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

/* Scroll Reveal Class (Handled by JS IntersectionObserver) */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

.delay-100 {
    transition-delay: 0.1s;
}

.delay-200 {
    transition-delay: 0.2s;
}

/* Typing Text Cursor */
.typing-line::after {
    content: '|';
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

/* Timeline specific overrides */
.dir-rtl {
    direction: rtl;
}

/* Navbar blur on scroll */
#navbar.scrolled {
    background: rgba(2, 6, 23, 0.8);
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Mobile Menu */
.mobile-link {
    display: block;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s ease;
}

#mobile-menu.active .mobile-link {
    opacity: 1;
    transform: translateX(0);
}

#mobile-menu.active .mobile-link:nth-child(1) {
    transition-delay: 0.1s;
}

#mobile-menu.active .mobile-link:nth-child(2) {
    transition-delay: 0.2s;
}

#mobile-menu.active .mobile-link:nth-child(3) {
    transition-delay: 0.3s;
}

#mobile-menu.active .mobile-link:nth-child(4) {
    transition-delay: 0.4s;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg-main);
}

::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #475569;
}
