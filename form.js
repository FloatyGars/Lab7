const form = document.getElementById("registrationForm");
const birthdateInput = document.getElementById("birthdate");
const ageDisplay = document.getElementById("ageDisplay");

function calculateAge(birthdate) {
  const birth = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// Live age display as user selects date
birthdateInput.addEventListener("input", function () {
  if (!birthdateInput.value) {
    ageDisplay.textContent = "";
    return;
  }
  const age = calculateAge(birthdateInput.value);
  ageDisplay.textContent = `Age: ${age} years old`;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const terms = document.getElementById("terms");

  if (fullname.value.trim() === "") {
    fullname.nextElementSibling.textContent = "Required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    email.nextElementSibling.textContent = "Enter valid email";
    valid = false;
  }

  if (password.value.length < 8) {
    password.nextElementSibling.textContent = "Minimum of 8 characters";
    valid = false;
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.nextElementSibling.textContent = "Passwords do not match";
    valid = false;
  }

  if (!birthdateInput.value) {
    birthdateInput.nextElementSibling.textContent = "Birthdate required";
    valid = false;
  } else {
    const age = calculateAge(birthdateInput.value);
    if (age < 18) {
      birthdateInput.nextElementSibling.textContent = "You must be 18 or older to register";
      valid = false;
    }
  }

  if (!terms.checked) {
    terms.nextElementSibling.textContent = "You must agree to continue";
    valid = false;
  }

  if (valid) {
    alert(`Registration Successful!\nDerived Age: ${calculateAge(birthdateInput.value)} years old `);
    form.reset();
    ageDisplay.textContent = "";
  }
});
