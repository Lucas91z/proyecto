const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const mensajeValue = mensaje.value.trim();

    if (nombreValue === "") {
        setErrorFor(nombre, "Ingrese un nombre.");
    } else {
        setSuccessFor(nombre);
    }

    if (emailValue === "") {
        setErrorFor(email, "Ingrese un e-mail.");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "No es un email válido.");
    } else {
        setSuccessFor(email);
    }

    if (mensajeValue === "") {
        setErrorFor(mensaje, "Escriba un mensaje.");
    } else {
        setSuccessFor(mensaje);
    }

}
/*ERROR */
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}
/*EXITO*/
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
}

console.log