function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
for (let i = 0; i < modalBtn.length; i++) {
  const btn = modalBtn[i];
  btn.addEventListener("click", launchModal);
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const closeBtn = document.querySelector("#close-croix");
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Clear all error messages
function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(error => error.textContent = "");
}

// Validate form
function validate() {
  let isValid = true;
  clearErrors();

  // Prénom validation
  const firstName = document.getElementById("first").value;
  if (firstName.length < 2) {
    document.getElementById("error-first").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    isValid = false;
  }

  // Nom validation
  const lastName = document.getElementById("last").value;
  if (lastName.length < 2) {
    document.getElementById("error-last").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("error-email").textContent = "Veuillez entrer une adresse email valide.";
    isValid = false;
  }

  // Date de naissance validation
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    document.getElementById("error-birthdate").textContent = "Vous devez entrer votre date de naissance.";
    isValid = false;
  }

  // Quantité validation
  const quantity = document.getElementById("quantity").value;
  if (isNaN(quantity) || quantity < 0 || quantity > 99) {
    document.getElementById("error-quantity").textContent = "Veuillez entrer un nombre valide entre 0 et 99 pour la quantité.";
    isValid = false;
  }

  // Radio button validation
  const location = document.querySelector('input[name="location"]:checked');
  if (!location) {
    document.getElementById("error-location").textContent = "Vous devez choisir une option.";
    isValid = false;
  }

  // Terms and conditions validation
  const terms = document.getElementById("checkbox1").checked;
  if (!terms) {
    document.getElementById("error-checkbox1").textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    isValid = false;
  }

  return isValid;
}
