window.onload = function () {
  const envelopeImg = document.getElementById("envelopeImg");
  envelopeImg.classList.add("bounce");
};

let currentStep = 0;
const totalSteps = 6;

function openLetter() {
  const envelopeImg = document.getElementById("envelopeImg");
  const envelope = document.getElementById("envelope");

  // Stop bounce + switch image to open envelope
  envelopeImg.classList.remove("bounce");
  envelopeImg.src = "foropenanimation.png"; // Your open envelope image
  envelopeImg.alt = "Opened Envelope";

  // Show first letter with animation
  const firstLetter = document.getElementById("letterBox1");
  firstLetter.classList.remove("hidden");
  firstLetter.classList.add("fade-in");

  // Show buttons and hide helper text
  document.getElementById("buttonRow").classList.remove("hidden");
  document.querySelector(".click-text").style.display = "none";
// 🎉 Confetti (your version)
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 }
});

// 🔊 Play sound
document.getElementById("confettiSound").play();

  // Disable further clicking
  envelope.onclick = null;
  currentStep = 1;
}


function showNext() {
  document.getElementById(`letterBox${currentStep}`).classList.add("hidden");
  currentStep++;

  const nextBox = document.getElementById(`letterBox${currentStep}`);
  if (nextBox) {
    nextBox.classList.remove("hidden");
    nextBox.classList.add("fade-in");
  }

  if (currentStep === totalSteps) {
    document.getElementById("buttonRow").classList.add("hidden");   // hide old buttons
    document.getElementById("startRow").classList.remove("hidden"); // show final row
  }
}

function goBack() {
  const envelopeImg = document.getElementById("envelopeImg");
  const envelope = document.getElementById("envelope");

  if (currentStep > 1) {
    // Hide current letter
    document.getElementById(`letterBox${currentStep}`).classList.add("hidden");

    // Decrease step
    currentStep--;

    // Show previous letter with animation
    const prevBox = document.getElementById(`letterBox${currentStep}`);
    prevBox.classList.remove("hidden");
    prevBox.classList.add("fade-in");

    // Button logic
    if (currentStep === totalSteps - 1) {
      // Just came back from last letter
      document.getElementById("startRow").classList.add("hidden");
      document.getElementById("buttonRow").classList.remove("hidden");
    }

    // Always show Next if not on final letter
    document.getElementById("nextBtn").classList.remove("hidden");

  } else if (currentStep === 1) {
    // Hide first letter
    document.getElementById("letterBox1").classList.add("hidden");

    // Hide both button rows
    document.getElementById("buttonRow").classList.add("hidden");
    document.getElementById("startRow").classList.add("hidden");

    // Reset envelope
    document.querySelector(".click-text").style.display = "block";
    envelopeImg.src = "pleaeseeework.png";
    envelopeImg.alt = "Closed Envelope";
    envelopeImg.style.opacity = "1";

    envelopeImg.classList.remove("open", "bounce");
    void envelopeImg.offsetWidth;
    envelopeImg.classList.add("bounce");

    currentStep = 0;
    envelope.onclick = openLetter;
  }
}
