const nombre = document.getElementById("usuario");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit" , e=> {
  e.preventDefault()
  let warnings = "";
  let entrar = false;
  let regexEmail =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  parrafo.innerHTML=""
  if (nombre.value.length < 6){
    warnings += "El nombre no es valido <br>"
    entrar = true
  }
  console.log(regexEmail.test(email.value))
  if (!regexEmail.test(email.value)){
    warnings += "El email no es valido <br>"
    entrar = true
  }
  if (pass.value.length < 8){
    warnings += "La contraseña no es valida <br>"
    entrar = true 
  }
  if(entrar){
    parrafo.innerHTML = warnings
  }else{
    parrafo.innerHTML ="Enviado"
  }
})

