"use strict";

const btn = document.querySelector('button') as HTMLButtonElement;
const tabla = document.getElementById("tabla") as HTMLTableElement;
btn.addEventListener("click", mostrarMas);

function mostrarMas(): void {
  if (tabla.classList.contains("oculto")) {
    tabla.classList.remove("oculto");
    btn.textContent = "Ver Menos";
  } else {
    tabla.classList.add("oculto");
    btn.textContent = "Ver Más";
  }
}


const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const btnSend = document.getElementById("btn-send") as HTMLButtonElement;

btnSend.addEventListener("click", () => verifyForm(email, password));

function verifyForm(email: HTMLInputElement, password: HTMLInputElement) {
  if (!isValidEmail(email.value)) {
    console.log("debe ingresar un email válido");
    email.focus();
    return;
  }
}

function isValidEmail(email: string): boolean {
  console.log(email);
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// const input: HTMLInputElement | null
const input = document.getElementById('password') as HTMLInputElement | null; //le decimos a TypeScript q la variable input almacena un valor HTMLInputElement o un valor null y que no joda.
const value = input?.value;
console.log(value)
if (input != null) {
  console.log(input.value);
}
input?.addEventListener('input', function (event) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

/* Probamos otra cosa */
let email2 = document.getElementById("email");
let claveIngresada = document.getElementById("password");
let btnEnviar = document.getElementById("btn-send");
let msj = document.getElementById("msjLogin");

btnEnviar.addEventListener("click", () => {
  let nombre: string ;
  let clave: string;
  let emailAValidar = email2.value;
  let claveAValidar = claveIngresada.value;

if (emailAValidar != "" && claveAValidar != "") {
    console.log("algo se lee");
    msj.innerHTML = "algo se lee";
  } else {
    console.log("tenes que poner un email y cualquier contraseña");
    msj.innerHTML = "tenes que poner un email y cualquier contraseña";
  }
});
