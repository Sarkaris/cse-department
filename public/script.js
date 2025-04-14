document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Functionality ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const htmlElement = document.documentElement;

    const applyTheme = (theme) => {
        htmlElement.setAttribute('data-bs-theme', theme);
        if (theme === 'dark') {
            moonIcon.classList.remove('d-none');
            sunIcon.classList.add('d-none');
        } else {
            moonIcon.classList.add('d-none');
            sunIcon.classList.remove('d-none');
        }
        localStorage.setItem('theme', theme);
    };

    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        // Default to dark theme if nothing is stored or preferred
        return 'dark';
    };

    // Initialize Theme on Load
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    // Theme Toggle Button Event Listener
    if (themeToggleBtn) { // Check if the button exists
        themeToggleBtn.addEventListener('click', () => {
            const newTheme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

       // --- Hero Title Sting Effect ---
       const heroTitle = document.getElementById('hero-title');
       if (heroTitle) {
           // Apply the NEW animation class shortly after the DOM is ready
           setTimeout(() => {
               // Use the NEW class name here
               heroTitle.classList.add('apply-lightning-strike');
           }, 100); // 100ms delay
   
           // Optional: Remove class after animation ends
           /*
           heroTitle.addEventListener('animationend', () => {
               heroTitle.classList.remove('apply-lightning-strike');
           }, { once: true });
           */
       }

    // --- Bootstrap Form Validation ---
    // (Standard Bootstrap validation script)
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

});