

function cambiarNombre(){

    let nombre = document.querySelector(".nombre");

    nombre.innerHTML = miInput.value;
}


let miInput = document.querySelector(".valorUsuario");
miInput.addEventListener("change",cambiarNombre);