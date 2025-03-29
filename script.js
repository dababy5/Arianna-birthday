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

function goBack() {
  const envelopeImg = document.getElementById("envelopeImg");
  const envelope = document.getElementById("envelope");

  // Reset everything
  document.getElementById("letterBox").classList.add("hidden");
  document.getElementById("backBtn").classList.add("hidden");
  document.querySelector(".click-text").style.display = "block";

  envelopeImg.classList.remove("open");
  envelopeImg.classList.add("bounce");
  envelope.onclick = openLetter;
};