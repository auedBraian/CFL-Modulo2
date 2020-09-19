

let inputCompra = document.querySelector(".compra");
let totalCompras = document.querySelector(".total");
let compras = [];
let misCompras = document.querySelector(".misCompras")





function actualizarLista(){
    
    misCompras.innerHTML = " ";
    for(let i=0; i<compras.length; i++){
    
        //creo un li adentro de la lista para agregar esa compra
       let miLi = document.createElement("li");
    
       //Agrego el valor de la compra a ese li
        miLi.innerHTML = compras[i];
    
        //Agrego el li al html
        misCompras.appendChild(miLi);

    }
};



function agregarCompra(){

    //traigo el valor de la compra del input del html
    let nuevaCompra=Number(inputCompra.value);
    //agrego el valor de la compra al arreglo
    compras.push(nuevaCompra);

    //dejo vacio el campo del input
    inputCompra.value = " ";
    actualizarLista();
};


function calcularTotal(){

    let suma=0;

    for(let i=0; i<compras.length;i++){

        suma += compras[i];

    }

    totalCompras.innerHTML = suma;
};


function eliminarUltimaCompra(){

    compras.pop();

    actualizarLista();

};


function eliminarTodas(){

    compras=[];
    actualizarLista();

};


let botonAgregar = document.querySelector(".boton-agregar");
botonAgregar.addEventListener("click",agregarCompra);

let botonTotal=document.querySelector(".boton-total");
botonTotal.addEventListener("click",calcularTotal);

let botonEliminar=document.querySelector(".boton-eliminar");
botonEliminar.addEventListener("click",eliminarUltimaCompra);

let botonEliminarTodas=document.querySelector(".boton-eliminarTodas");
botonEliminarTodas.addEventListener("click",eliminarTodas);