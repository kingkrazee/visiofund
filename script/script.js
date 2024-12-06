// Burger Menu
$(document).ready(function () {
    $('#burgerMenu').click(function () {
      $(this).toggleClass('active');
      $('#navOverlay').toggleClass('active');
    });
  
    $('.nav-links a').click(function () {
      $('#burgerMenu').removeClass('active');
      $('#navOverlay').removeClass('active');
    });
  });
  
  // Carousel
  document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".carousel-wrapper");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const paginationDots = document.querySelectorAll(".pagination span");
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    // Clone first and last slides
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[totalSlides - 1].cloneNode(true);
  
    wrapper.appendChild(firstSlide);
    wrapper.insertBefore(lastSlide, slides[0]);
  
    wrapper.style.transform = `translateX(-100%)`;
  
    function updateCarousel() {
      wrapper.style.transition = "transform 0.5s ease-in-out";
      wrapper.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
      updatePagination();
    }
  
    function updatePagination() {
      paginationDots.forEach((dot, index) => {
        dot.classList.toggle(
          "active",
          index === (currentIndex % totalSlides) // Map index correctly
        );
      });
    }
  
    function handleNext() {
      currentIndex++;
      updateCarousel();
  
      if (currentIndex === totalSlides) {
        setTimeout(() => {
          wrapper.style.transition = "none";
          wrapper.style.transform = `translateX(-100%)`;
          currentIndex = 0;
        }, 500);
      }
    }
  
    function handlePrev() {
      currentIndex--;
      updateCarousel();
  
      if (currentIndex < 0) {
        setTimeout(() => {
          wrapper.style.transition = "none";
          wrapper.style.transform = `translateX(-${totalSlides * 100}%)`;
          currentIndex = totalSlides - 1;
        }, 500);
      }
    }
  
    paginationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
  
    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);
  
    // Initialize
    updatePagination();
  });
  