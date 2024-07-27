//document = ir no HTML
//querySelector = busca o que eu quiser

let formulario = document.querySelector(".formulario")

console.log(formulario)

function aparecerForm() {
  formulario.style.left = "70%"
}

function desaparecerForm() {
  formulario.style.left = "-50%"
}