
//TRAIGO EL BOTON
let boton = document.getElementById("boton");

//OBTENER EL INPUT
let lista = document.getElementById("lista");

 // OBTENER EL DIV
 let contenido=document.getElementById("contenido");


boton.addEventListener("click",agregarTarea);



function agregarTarea(){
    
    //creo un lugar para guardar la tarea
    let tarea = document.createElement("li");
   
    //ese lugar que acabo de crear, lo lleno con el valor que tiene el input
    tarea.innerHTML  = lista.value ;

    //lo anterior lo agrego a la lista de tareas
   contenido.appendChild(tarea); 

    lista.value=" ";
}



 
 