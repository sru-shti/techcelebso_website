// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Testimonial Slider Logic
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    let currentIndex = 1; // Start with the middle one active
    
    function updateSlider() {
        testimonials.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });
    }

    // Add subtle hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-5px)'; // Return to hover base state from css
            setTimeout(() => {
                if(!card.matches(':hover')) {
                     card.style.transform = '';
                }
            }, 50);
        });
    });
});
