const formTitle = document.getElementById("form-title");
const toggleLink = document.getElementById("toggle-link");
const nameGroup = document.getElementById("name-group");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");

let isLogin = true;

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    nameGroup.style.display = "none";
    toggleLink.textContent = "Register";
  } else {
    formTitle.textContent = "Register";
    submitBtn.textContent = "Register";
    nameGroup.style.display = "block";
    toggleLink.textContent = "Login";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const fullname = document.getElementById("fullname").value.trim();

  if (!email || !password || (!isLogin && !fullname)) {
    alert("Please fill in all required fields.");
    return;
  }

  if (isLogin) {
    alert(`Logging in as ${email}`);
    // Add real login logic here
  } else {
    alert(`Registered user: ${fullname} (${email})`);
    // Add real registration logic here
  }

  form.reset();
});
