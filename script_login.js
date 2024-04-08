const form = document.querySelector("form");
const eField = form.querySelector(".email input");
const pField = form.querySelector(".password input");

form.onsubmit = (e) => {
  e.preventDefault(); // Prevent form submission

  // Check if email and password fields are empty
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

  // If both fields are not empty, redirect to index1.html
  if (eField.value.trim() !== "" && pField.value.trim() !== "") {
    alert("Login successful!");
    window.location.href = "index1.html";
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
