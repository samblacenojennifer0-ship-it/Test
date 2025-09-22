document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        root: null, // use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing the element once it's visible
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});