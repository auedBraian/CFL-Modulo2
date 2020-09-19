

function getDiceNumber() {

    let dado = Math.floor((Math.random() * 6) + 1);

    return dado;
}

function lanzar() {

    let sumaTotal = 0;
    let total = 0;
    let contadorDe7=0;
    
    for (let i = 1; i <= 1000; i++) {
        
        dado1 = getDiceNumber();
        dado2 = getDiceNumber();
    
        total = dado1 + dado2
        if(total==7){
            contadorDe7++;
        }
        sumaTotal = sumaTotal + total;
    }

    suma.innerHTML = sumaTotal;
    siete.innerHTML=contadorDe7;   

    let imagen1 = document.querySelector(".imagen1");
    imagen1.src = "http://tudai1-1.alumnos.exa.unicen.edu.ar/web-1/material/archivos/dado" + dado1 + ".png"

    let imagen2 = document.querySelector(".imagen2");
    imagen2.src = "http://tudai1-1.alumnos.exa.unicen.edu.ar/web-1/material/archivos/dado" + dado2 + ".png"
}

let dado1;
let dado2;

let botonLanzar = document.querySelector(".lanzarDados");
botonLanzar.addEventListener("click", lanzar);

let suma = document.querySelector(".suma");

let siete=document.querySelector(".siete");



