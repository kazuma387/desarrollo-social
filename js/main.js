document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        const slides = Array.from(carouselContainer.children);
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        let slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;

        let currentIndex = 0;

        function moveToSlide(index) {
            if (slideWidth > 0) {
                carouselContainer.style.transform = 'translateX(-' + slideWidth * index + 'px)';
                currentIndex = index;
            }
        }

        function showNextSlide() {
            const nextIndex = (currentIndex + 1) % slides.length;
            moveToSlide(nextIndex);
        }

        function showPrevSlide() {
            const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            moveToSlide(prevIndex);
        }

        if(nextButton && prevButton) {
            nextButton.addEventListener('click', showNextSlide);
            prevButton.addEventListener('click', showPrevSlide);
        }


        // Auto-play
        setInterval(showNextSlide, 5000); // Cambia de imagen cada 5 segundos

        // Recalculate width on window resize
        window.addEventListener('resize', () => {
            if (slides.length > 0) {
                slideWidth = slides[0].getBoundingClientRect().width;
                moveToSlide(currentIndex);
            }
        });
    }

    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Dropdown functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        if (dropbtn) {
            dropbtn.addEventListener('click', function(event) {
                // Prevent the default link behavior
                event.preventDefault();
                // Toggle the 'active' class on the parent dropdown
                dropdown.classList.toggle('active');
            });
        }
    });

    const toggleButton = document.getElementById('toggleRequirements');
    const requirementsList = document.getElementById('requirementsList');

    if (toggleButton && requirementsList) {
        toggleButton.addEventListener('click', () => {
            if (requirementsList.style.display === 'none') {
                requirementsList.style.display = 'block';
            } else {
                requirementsList.style.display = 'none';
            }
        });
    }

    // Inicialización de SimpleLightbox para la galería de departamentos
    const gallery = document.querySelector('.department-gallery .gallery-grid');
    if (gallery) {
        new SimpleLightbox('.department-gallery .gallery-grid a', {
            captionDelay: 250,
            animationSpeed: 250,
            fadeSpeed: 300
        });
    }
});
