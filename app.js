"use strict";
var btn = document.querySelector('button');
var tabla = document.getElementById("tabla");
btn.addEventListener("click", mostrarMas);
function mostrarMas() {
    if (tabla.classList.contains("oculto")) {
        tabla.classList.remove("oculto");
        btn.textContent = "Ver Menos";
    }
    else {
        tabla.classList.add("oculto");
        btn.textContent = "Ver Más";
    }
}
var email = document.getElementById("email");
var password = document.getElementById("password");
var btnSend = document.getElementById("btn-send");
btnSend.addEventListener("click", function () { return verifyForm(email, password); });
function verifyForm(email, password) {
    if (!isValidEmail(email.value)) {
        console.log("debe ingresar un email válido");
        email.focus();
        return;
    }
}
function isValidEmail(email) {
    console.log(email);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// const input: HTMLInputElement | null
var input = document.getElementById('password'); //le decimos a TypeScript q la variable input almacena un valor HTMLInputElement o un valor null y que no joda.
var value = input === null || input === void 0 ? void 0 : input.value;
console.log(value);
if (input != null) {
    console.log(input.value);
}
input === null || input === void 0 ? void 0 : input.addEventListener('input', function (event) {
    var target = event.target;
    console.log(target.value);
});
/* Probamos otra cosa */
var email2 = document.getElementById("email");
var claveIngresada = document.getElementById("password");
var btnEnviar = document.getElementById("btn-send");
var msj = document.getElementById("msjLogin");
btnEnviar.addEventListener("click", function () {
    var nombre;
    var clave;
    var emailAValidar = email2.value;
    var claveAValidar = claveIngresada.value;
    if (emailAValidar != "" && claveAValidar != "") {
        console.log("algo se lee");
        msj.innerHTML = "algo se lee";
    }
    else {
        console.log("tenes que poner un email y cualquier contraseña");
        msj.innerHTML = "tenes que poner un email y cualquier contraseña";
    }
});
