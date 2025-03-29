window.onload = function () {
  const envelopeImg = document.getElementById("envelopeImg");
  envelopeImg.classList.add("bounce");
};

let currentStep = 0;
const totalSteps = 2;

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

  // Disable further clicking
  envelope.onclick = null;
  currentStep = 1;
}


function showNext() {
  // Hide current letter
  document.getElementById(`letterBox${currentStep}`).classList.add("hidden");

  currentStep++;

  // Show next letter with animation
  const nextBox = document.getElementById(`letterBox${currentStep}`);
  if (nextBox) {
    nextBox.classList.remove("hidden");
    nextBox.classList.add("fade-in");
  }

  // Hide "Next" if it's the last step
  if (currentStep === totalSteps) {
    document.getElementById("nextBtn").classList.add("hidden");
  }
}

function goBack() {
  const envelopeImg = document.getElementById("envelopeImg");
  const envelope = document.getElementById("envelope");

  if (currentStep > 1) {
    // Hide current letter
    document.getElementById(`letterBox${currentStep}`).classList.add("hidden");

    // Show previous letter with fade
    currentStep--;
    const prevBox = document.getElementById(`letterBox${currentStep}`);
    prevBox.classList.remove("hidden");
    prevBox.classList.add("fade-in");

    // Ensure next button is visible (unless already on last letter)
    document.getElementById("nextBtn").classList.remove("hidden");

  } else if (currentStep === 1) {
    // Back to envelope state
    document.getElementById("letterBox1").classList.add("hidden");
    document.getElementById("buttonRow").classList.add("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");
    document.querySelector(".click-text").style.display = "block";

    // Reset envelope image and opacity
    envelopeImg.src = "pleaeseeework.png";
    envelopeImg.alt = "Closed Envelope";
    envelopeImg.style.opacity = "1"; // 💡 reset faded envelope

    // Restart bounce animation
    envelopeImg.classList.remove("open", "bounce");
    void envelopeImg.offsetWidth; // 🔁 restart trick
    envelopeImg.classList.add("bounce");

    currentStep = 0;
    envelope.onclick = openLetter;
  }
}
