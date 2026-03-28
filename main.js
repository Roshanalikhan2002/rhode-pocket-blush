document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-inner');
    const dots = document.querySelectorAll('.dot');
    const indicator = document.querySelector('.pagination-indicator');
    const buyButton = document.querySelector('.buy-button');
    let currentIndex = 0;
    const totalSlides = dots.length;

    // Simple Carousel Logic
    function updateCarousel(index) {
        currentIndex = index;
        const offset = -currentIndex * 50; // Since image and slide width is 50% relative to carousel-inner
        carouselContainer.style.transform = `translateX(${offset}%)`;
        
        // Update dots and indicator
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
        
        indicator.textContent = `${currentIndex + 1} / ${totalSlides}`;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % totalSlides;
        updateCarousel(nextIndex);
    }, 5000);

    // Micro-animations for the CTA button
    buyButton.addEventListener('mouseenter', () => {
        buyButton.style.backgroundColor = '#000';
        buyButton.style.color = '#fff';
    });

    buyButton.addEventListener('mouseleave', () => {
        buyButton.style.backgroundColor = 'transparent';
        buyButton.style.color = '#000';
    });
    
    // Add "added to cart" interaction for feedback
    buyButton.addEventListener('click', () => {
        const originalText = buyButton.textContent;
        buyButton.textContent = 'ADDING...';
        buyButton.style.opacity = '0.7';
        
        setTimeout(() => {
            buyButton.textContent = 'ADDED TO CART ✓';
            buyButton.style.backgroundColor = '#9eb69e'; // Soft green for success
            buyButton.style.border = '1px solid #9eb69e';
            buyButton.style.color = '#fff';
            buyButton.style.opacity = '1';
            
            setTimeout(() => {
                buyButton.textContent = originalText;
                buyButton.style.backgroundColor = 'transparent';
                buyButton.style.color = '#000';
                buyButton.style.border = '1px solid #000';
            }, 2000);
        }, 1000);
    });
});
