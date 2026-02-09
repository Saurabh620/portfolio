<!-- Copilot instructions for the portfolio repo -->
# Guidance for AI coding agents

Purpose
- Help contributors and AI assistants make small, safe edits to this static portfolio site.

Big picture
- This is a single-page, static portfolio: the main entry is `index.html` which loads `style.css` and `script.js`.
- No build system, no bundler, and no backend: edits are deployed by pushing the repo (e.g., GitHub Pages or static host).

Key files & patterns (concrete examples)
- `index.html` — page structure and anchors (`#about`, `#projects`, `#contact`). Keep IDs and core classes (e.g., `logo`, `nav-link`, `mobile-link`) intact when changing markup.
- `script.js` — UI behavior and interactions:
  - Typing animation: edit the `phrases` array near the top to change hero text.
  - Reveal animations: elements use the `reveal` class; JS adds `reveal-pending` then toggles `active` when visible.
  - Mobile menu: toggles `#menu-btn` and `#mobile-menu`, and manipulates `document.body.style.overflow`.
  - Theme toggle: uses `theme-toggle` button, `light-mode` body class, and `localStorage.theme` (keys: `light` / `dark`).
  - Contact form: the form is a mock client-side submission (no backend). See `#contact-form` handler for UX flows and message text.
- `style.css` — a custom utility-first stylesheet (Tailwind-like classes). Many components rely on specific class names (e.g., `animate-fade-up`, `animate-pulse-slow`, `line-clamp-2`). Prefer adding classes rather than renaming existing ones.

Agent behavior rules (do this first)
- Preserve class and id names used by `script.js` and `style.css` unless you update both files together. Breaking a class name will likely break styling/JS.
- Small UI tweaks are fine (text, copy, image src, colors). For structural changes (adding components, remapping anchors), check `index.html` for cross-linked anchors and update `script.js` selectors accordingly.
- Do not add new build tooling, package.json, or bundlers without an explicit request.

Local preview & quick checks
- Serve locally to validate: `python3 -m http.server 8000` from repo root, then open `http://localhost:8000`.
- Linting/tests: none included. Run manual browser checks for animations, mobile menu, theme toggle, and form flow.

Common, discoverable change examples
- Change hero typing words: edit `phrases` in `script.js` (lines near the top).
- Replace profile image: update the `img` src in `index.html` (hero > img element).
- Add a project card: copy the existing project card block under `#projects` and update content/links — preserve utility classes and overlay structure.

Safety & deployment notes
- The contact form is client-only; do not assume a backend exists when adding form integrations.
- `style.css` is large and defines many utility classes. Prefer adding new utility classes for new styles rather than editing globals that affect many components.

If unsure
- Ask the repository owner before making large refactors (class renames, JS architecture changes, or introducing a build step).

Next step for me: confirm desired edits or iterate on this guidance.
