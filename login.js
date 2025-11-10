const demoUser = {
  email: "sample@gmail.com",
  password: "password123"
};

document.getElementById("togglePassword").addEventListener("change", function () {
    const password = document.getElementById("password");
    password.type = this.checked ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    if (!email.value || !email.value.includes("@")) {
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    if (!password.value || password.value.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    }

    if (valid) {
        alert(" Login Successful!");
        // redirect or call backend here
    }
});
