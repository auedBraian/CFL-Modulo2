





function mostrarMensaje(){

    console.log("pasaron 5 segundos");
}



function activarBomba(){
    let contador = 5; //esto lo podria ingresar el usuario a travez de un input y yo traerme ese valor
    let miDiv = document.querySelector(".miDiv");
    let intervalo=setInterval(function(e){
        if(contador===0){
            miDiv.innerHTML = "BOOOOOM";
            clearInterval(intervalo);
        }
        else{
            contador--;
            miDiv.innerHTML = contador;
        }
        console.log(contador);
    },1000);
}







let boton = document.querySelector(".miBoton");



boton.addEventListener("click", activarBomba);





/*boton.addEventListener("click", function(e){
   
    //muestra el mensaje despues de 5 segundos
    //setTimeout(mostrarMensaje, 5000);

    //muestra el mensaje cada 1 segundo, hasta que yo lo frene
   let intervalo = setInterval(mostrarMensaje,1000);

   boton2.addEventListener("click",function(e){

    //aca cree un clear interval para poder frenar el mensaje anterior
    clearInterval(intervalo);
    })
   
})
*/



