// ---------------------
// Part 1: Event Handling
// ---------------------
document.getElementById("clickMeBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Button was clicked 🎉";
});

// ---------------------
// Part 2: Interactive Features
// ---------------------

// Light/Dark mode toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Counter feature
let count = 0;
document.getElementById("increment").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// ---------------------
// Part 3: Form Validation
// ---------------------
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent reload
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be 6+ characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success
  if (valid) {
    alert("Form submitted successfully ✅");
  }
});
