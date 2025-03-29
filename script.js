window.onload = function () {
  const envelopeImg = document.getElementById("envelopeImg");
  envelopeImg.classList.add("bounce");
};

function openLetter() {
  const envelopeImg = document.getElementById("envelopeImg");
  const envelope = document.getElementById("envelope");

  // Stop bounce and show letter
  envelopeImg.classList.remove("bounce");
  envelopeImg.classList.add("open");

  document.querySelector(".click-text").style.display = "none";
  document.getElementById("letterBox").classList.remove("hidden");
  document.getElementById("backBtn").classList.remove("hidden");

  envelope.onclick = null; // prevent repeat clicking
}
function showNext() {
  document.getElementById("letterBox2").classList.remove("hidden");
  document.getElementById("nextBtn").classList.add("hidden"); // hide Next button after clicking
}

function goBack() {
  const envelopeImg = document.getElementById("envelopeImg");
  const envelope = document.getElementById("envelope");

  // Hide both message boxes
  document.getElementById("letterBox").classList.add("hidden");
  document.getElementById("letterBox2").classList.add("hidden");

  // Hide button row and reset next button
  document.getElementById("buttonRow").classList.add("hidden");
  document.getElementById("nextBtn").classList.remove("hidden");

  // Show "Click to open" text again
  document.querySelector(".click-text").style.display = "block";

  // Reset envelope animation and click handler
  envelopeImg.classList.remove("open");
  envelopeImg.classList.add("bounce");
  envelope.onclick = openLetter;
}
