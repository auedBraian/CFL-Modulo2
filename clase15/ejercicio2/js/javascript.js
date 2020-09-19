

let listaDivs =  document.querySelectorAll("div");
let listaBotones= document.querySelectorAll("button");

function mostrarUocultar(i){

    listaDivs[i].classList.toggle("ocultar");
    
    }

for(let i=0; i<listaBotones.length; i++){

    listaBotones[i].addEventListener("click",function(e){
        mostrarUocultar(i);
    });
}




