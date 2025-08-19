// aquí comienza el redirect al home luego de realizar un login exitoso
function redirectToHome() {

    localStorage.setItem("loggedIn", "true");

    //divido la función en dos partes, una que redirija, la parte principal, pero la primera es la que se asegura que los datos queden guardados.

    window.location.href = "index.html";
}

const btnLogin = document.getElementById("btn-login");
if (btnLogin) {
    btnLogin.addEventListener("click", redirectToHome);
}
