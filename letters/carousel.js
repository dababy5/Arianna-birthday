const slides = document.querySelectorAll(".memory-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const memoryTitle = document.getElementById("memoryTitle");

const titles = [
  "Busche Gardens",
  "Our First Date",
  "Birthday Message",
];

let currentIndex = 0;
let isTransitioning = false;

function showSlide(index) {
  if (isTransitioning) return;
  isTransitioning = true;

  const currentSlide = slides[currentIndex];

  // Fade out current text
  currentSlide.classList.remove("active");
  currentSlide.classList.add("fade-out");

  // Fade out title
  memoryTitle.style.opacity = 0;

  setTimeout(() => {
    currentSlide.classList.remove("fade-out");

    // Show new slide
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });

    // Update and fade in title
    memoryTitle.textContent = titles[index];
    memoryTitle.style.opacity = 1;

    currentIndex = index;
    isTransitioning = false;
  }, 400); // same as CSS fade-out duration
}

// Button Events
prevBtn.addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

nextBtn.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % slides.length;
  showSlide(newIndex);
});

// Initial load
showSlide(currentIndex);


