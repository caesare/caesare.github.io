/*
    Objetivo de hoy lunes:

    1. Planeación de su juego, decidir que
    tema llevará y obtener imagenes 
    representativas de las opciones que
    se usarán

    2. Crear layout de su juego con las
    siguientes características:
      - Encabezado con nombre de juego
      - Colores personalizados de fondo
        y textos
      - Botones grandes con las 3 opciones
        del juego (piedra, papel, tijera)
      - Cuadro de texto que muestre los 
        resultados del juego (estilos)

    Recuerden utilizar flexbox para su
    estructura de elementos.

    Ideas de temas alternos:
    
    En ciertos paises asiaticos juegan con:
        pajaro, agua y piedra

    Versión difícil (ver alt.png):
    piedra, papel, tijera, lagartija, spock
*/

console.log('MUSIC')

let buttonjazz  = document.querySelector(".JAZZ");
let buttonblues = document.querySelector(".BLUES");
let buttonrock  = document.querySelector(".ROCK");
let seleccion = document.querySelector(".jugador1");
let computadora = document.querySelector(".cpu");
let resultado = document.querySelector(".resultado");
let JAZZ = new Audio("jazz.mp3");
let BLUES = new Audio("Hendrix.mp3");
let ROCK = new Audio("Chuck Berry - Johnny B. Goode.mp3");


function player (inp){
  JAZZ.pause() 
  JAZZ.currentTime = 0 
  BLUES.pause()
  BLUES.currentTime = 0
  ROCK.pause()
  ROCK.currentTime = 0
  resultado.innerText = ""
  seleccion.innerText=(inp.target.innerText); 
  let opciones = [buttonjazz,buttonblues,buttonrock]
  console.log(seleccion.innerText)
  let indice = Math.floor(Math.random()* 3)
  let opcionAlazar = opciones[indice]
  computadora.innerText =(opcionAlazar.innerText);

  if(seleccion.innerText == computadora.innerText ) {
  
if (seleccion.innerText == "JAZZ" && computadora.innerText == "JAZZ") JAZZ.play()
if (seleccion.innerText == "BLUES" && computadora.innerText == "BLUES") BLUES.play()
if (seleccion.innerText == "ROCK" && computadora.innerText == "ROCK") ROCK.play()


    setTimeout (function(){
     resultado.innerText = "EMPATE" ;
    },1000);

    return;
  }


if ((seleccion.innerText == "JAZZ" && computadora.innerText == "BLUES") ||
  (seleccion.innerText == "BLUES" && computadora.innerText == "ROCK") ||
    (seleccion.innerText == "ROCK" && computadora.innerText == "JAZZ")){
  
if (seleccion.innerText == "JAZZ") JAZZ.play()
if (seleccion.innerText == "BLUES") BLUES.play()
if (seleccion.innerText == "ROCK") ROCK.play()


  setTimeout (function(){
  resultado.innerText = "TU GANAS" ;
},1000);
  
}

else {

if (computadora.innerText == "JAZZ") JAZZ.play()
if (computadora.innerText == "BLUES") BLUES.play()
if (computadora.innerText == "ROCK") ROCK.play()

  setTimeout (function(){
    resultado.innerText = "PERDISTE" ;
  },1000);
}
}

buttonjazz.addEventListener('click',player)
buttonblues.addEventListener('click',player)
buttonrock.addEventListener('click',player)





/*

    if (seleccion.innerText == "JAZZ" || seleccion.innerText == "BLUES" 
    && computadora.innerText == "BLUES" || computadora.innerText == "JAZZ"){
    
     setTimeout (function(){
      resultad.innerText = "JAZZ WINS" ;
    },1500);
    }

     if(seleccion.innerText == "BLUES" || seleccion.innerText == "ROCK"
      && computadora.innerText == "ROCK" || seleccion.innerText == "BLUES"){
      
      setTimeout (function(){
        resultado.innerText = "BLUES WINS"
      },1500);
    }
 

      if(seleccion.innerText == "ROCK" || seleccion.innerText == "JAZZ"
       && computadora.innerText == "JAZZ" || computadora.innerText == "ROCK"){
        
        setTimeout (function(){
          resultado.innerText = "ROCK WINS"
        },1500);
      }
  */

    


