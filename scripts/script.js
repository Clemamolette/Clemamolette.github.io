window.addEventListener("scroll", () => {
  const kitty = document.getElementById("sleepy-kitty");
  if (window.scrollY > 0) {
    kitty.classList.add("hidden");
  } else {
    kitty.classList.remove("hidden");
  }
});

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        button.classList.add('active');
        tabContents[idx].style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach((carousel) => {
    const slidesWrapper = carousel.querySelector('.carousel-slides');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelectorAll('.carousel-indicators .indicator, .carousel-indicators button');

    if (!slidesWrapper || slides.length === 0) {
      return;
    }

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
        indicator.classList.toggle('bg-white/50', index !== currentIndex);
        indicator.classList.toggle('bg-white', index === currentIndex);
      });
    }

    function updateSlidePosition() {
      slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateIndicators();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        updateSlidePosition();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
      });
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
      });
    });

    updateSlidePosition();
  });
});