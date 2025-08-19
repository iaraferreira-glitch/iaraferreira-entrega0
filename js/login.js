function redirectToHome() {
    window.location.href = "index.html";
}

const btnLogin = document.getElementById("btn-login");
if (btnLogin) {
    btnLogin.addEventListener("click", redirectToHome);
}