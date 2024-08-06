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
  const inputErrors = document.querySelectorAll(".input-error");
  inputErrors.forEach(inputError => inputError.classList.remove("input-error"));
  const errors = document.querySelectorAll(".error");
  errors.forEach(error => error.textContent = "");
}

// Validate form
function validate(event) {
  event.preventDefault(); // Empêche la soumission du formulaire
  let isValid = true;
  clearErrors();

  // Prénom validation
  const firstName = document.getElementById("first");
  if (firstName.value.length < 2) {
      firstName.classList.add("input-error");
      document.getElementById("error-first").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      isValid = false;
  }

  // Nom validation
  const lastName = document.getElementById("last");
  if (lastName.value.length < 2) {
      lastName.classList.add("input-error");
      document.getElementById("error-last").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      isValid = false;
  }

  // Email validation
  const email = document.getElementById("email");
  if (!email.value.includes('@')) {
      email.classList.add("input-error");
      document.getElementById("error-email").textContent = "Veuillez entrer un email valide.";
      isValid = false;
  }

  // Date de naissance validation
  const birthdate = document.getElementById("birthdate");
  if (!birthdate.value) {
      birthdate.classList.add("input-error");
      document.getElementById("error-birthdate").textContent = "Veuillez entrer votre date de naissance.";
      isValid = false;
  }

  // Quantité validation
  const quantity = document.getElementById("quantity");
  if (quantity.value < 0) {
      quantity.classList.add("input-error");
      document.getElementById("error-quantity").textContent = "Veuillez entrer une quantité valide.";
      isValid = false;
  }

  // Lieu validation
  const location = document.getElementById("location");
  if (!location.value) {
      location.classList.add("input-error");
      document.getElementById("error-location").textContent = "Veuillez sélectionner un lieu.";
      isValid = false;
  }

  // Conditions d'utilisation validation
  const terms = document.getElementById("terms");
  if (!terms.checked) {
      terms.classList.add("input-error");
      document.getElementById("error-terms").textContent = "Vous devez accepter les conditions d'utilisation.";
      isValid = false;
  }

  // Afficher le message de succès si le formulaire est valide
  if (isValid) {
      const form = document.querySelector('.modal-body');
      form.style.display = 'none';
      const successMessage = document.getElementById('success-message');
      successMessage.style.display = 'flex';
  }

  return isValid;
}

// Fermer le message de succès
document.getElementById('close-success').addEventListener('click', function() {
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'none';
  const form = document.querySelector('.modal-body');
  form.style.display = 'block';
});

document.getElementById('close-success-btn').addEventListener('click', function() {
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'none';
  const form = document.querySelector('.modal-body');
  form.style.display = 'block';
});

// Attacher la fonction de validation au formulaire
document.querySelector('form[name="reserve"]').addEventListener('submit', validate);
