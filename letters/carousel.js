const slides = document.querySelectorAll(".memory-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const memoryTitle = document.getElementById("memoryTitle");

// Titles for each slide (make sure they match the number/order of your slides)
const titles = [
  "Title 1",
  "Title 2"
  // Add more titles if you add more slides
];

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  // Update the title above the memory text
  memoryTitle.textContent = titles[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Show the first slide on load
showSlide(currentIndex);

