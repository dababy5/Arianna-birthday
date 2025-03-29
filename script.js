window.onload = function () {
  const envelopeImg = document.getElementById("envelopeImg");
  envelopeImg.classList.add("bounce");
};

let currentStep = 0;
const totalSteps = 2;

function openLetter() {
  const envelopeImg = document.getElementById("envelopeImg");
  const envelope = document.getElementById("envelope");

  envelopeImg.classList.remove("bounce");
  envelopeImg.classList.add("open");

  document.querySelector(".click-text").style.display = "none";
  document.getElementById("letterBox1").classList.remove("hidden"); // 🔥 FIXED
  document.getElementById("buttonRow").classList.remove("hidden");

  currentStep = 1;
  envelope.onclick = null;
}

function showNext() {
  // Hide current letter
  document.getElementById(`letterBox${currentStep}`).classList.add("hidden");

  currentStep++;

  // Show next letter
  const nextBox = document.getElementById(`letterBox${currentStep}`);
  if (nextBox) nextBox.classList.remove("hidden");

  // Hide "Next" if it's the last letter
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

    // Go back to previous letter
    currentStep--;
    document.getElementById(`letterBox${currentStep}`).classList.remove("hidden");

    // Show Next button again (unless you're on last letter)
    document.getElementById("nextBtn").classList.remove("hidden");

  } else if (currentStep === 1) {
    // Back to envelope view
    document.getElementById("letterBox1").classList.add("hidden");
    document.getElementById("buttonRow").classList.add("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");

    document.querySelector(".click-text").style.display = "block";

    envelopeImg.classList.remove("open", "bounce");
    void envelopeImg.offsetWidth;
    envelopeImg.classList.add("bounce");

    currentStep = 0;
    envelope.onclick = openLetter;
  }
}

