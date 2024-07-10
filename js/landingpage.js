

//fade in animation

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add('slide-in');
                entry.target.classList.add('right-slide-in');
                observer.unobserve(entry.target); // Optional: Stop observing after the first time
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

// code to displau the mobile menu

function showMenu() {
    menu = document.querySelector('.rightnav')
    menu.style.display = 'flex';
}
function closeMenu() {
    menu = document.querySelector('.rightnav')
    menu.style.display = 'none';
}





