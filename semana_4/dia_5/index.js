// buttons
let clickcalcular = document.querySelector('#clickcalcular');
// inputs
let Altura = +document.querySelector('#clickaltura');
let Peso = +document.querySelector('#clickpeso');
let IMC = +document.querySelector ('input.IMC');

function indiceDeMasaCorporal(peso, altura ) {
   return (peso / Math.pow(altura, 2) ),toFixed(2);
   }
 

   clickcalcular.addEventListener('click',indiceDeMasaCorporal)

  

