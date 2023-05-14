const nombre = document.getElementById("nombre");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", e => {
    e.preventDefault();
    let alerta_msg = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexTel = /^(?:[0-9] ?){6,14}[0-9]$/;

    if (nombre.value.length < 2) {
        alerta_msg += "El nombre es muy corto<br>";
        entrar = true;
    }else if (nombre.value.length > 20) {
        alerta_msg += "El nombre es demasiado largo (máximo 20 caracteres)<br>";
        entrar = true;
    }
    if (!regexTel.test(tel.value)) {
        alerta_msg += "Inserte un teléfono válido<br>";
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        alerta_msg += "Inserte un email válido <br>";
        entrar = true;
    }
    if (mensaje.value == "") {
        alerta_msg += "Escriba un mensaje";
        entrar = true;
    }

    if (entrar) {
        alerta.innerHTML = "<span style='color: red'>" + alerta_msg + "</span>";
    } else {
        alerta.innerHTML = "<span style='color: green'>Mensaje enviado</span>";
    }
});
