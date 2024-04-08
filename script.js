const form = document.querySelector("form");
const uField = form.querySelector(".username input");
const eField = form.querySelector(".email input");
const pField = form.querySelector(".password input");

form.onsubmit = (e) => {
  e.preventDefault(); // Prevent form submission

  // Check if username, email, and password fields are empty
  if (uField.value.trim() === "") {
    showError(uField, "Username can't be blank");
  } else {
    hideError(uField);
  }

  if (eField.value.trim() === "") {
    showError(eField, "Email can't be blank");
  } else {
    hideError(eField);
  }

  if (pField.value.trim() === "") {
    showError(pField, "Password can't be blank");
  } else {
    hideError(pField);
  }

  // If all fields are not empty, login the form
  if (uField.value.trim() !== "" && eField.value.trim() !== "" && pField.value.trim() !== "") {
    alert("Signup successful!");
    window.location.href = "login.html";
  }
};

// Function to show error message
function showError(field, message) {
  const errorTxt = field.parentElement.nextElementSibling;
  errorTxt.innerText = message;
  errorTxt.style.display = "block";
}

// Function to hide error message
function hideError(field) {
  const errorTxt = field.parentElement.nextElementSibling;
  errorTxt.style.display = "none";
}
