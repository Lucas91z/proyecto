const form = document.getElementById("form");
const nombre =document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getAnimations("mensaje");

form.addEventListener("sumbit", e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const mensajeValue = mensaje.value.trim();

    if (nombreValue === ""){
        setErrorFor(nombre, "Ingrese un nombre");
    }else{
        setSuccessFor(nombre);
    }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isEmail (email) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
}