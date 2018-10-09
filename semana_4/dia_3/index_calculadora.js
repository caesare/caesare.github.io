let num1 = document.querySelector ('.num1');
let num2 = document.querySelector ('.num2');
let resultado = document.querySelector ('.resultado');

let mas = document.querySelector('.botonMas');
let menos = document.querySelector('.botonMenos');
let por = document.querySelector('.botonPor');
let entre = document.querySelector('.botonEntre');


function suma() { 
        resultado.value =
parseFloat(num1.value)+
parseFloat(num2.value);

}
function Resta() {
     
    resultado.value = num1.value - num2.value;
}
function multiplicacion (){

    resultado.value = num1.value * num2.value;
}

function divicion() {
   
    resultado.value = num1.value / num2.value;
}

mas.addEventListener ('click', suma);
menos.addEventListener ('click', Resta);
por.addEventListener ('click',multiplicacion);
entre.addEventListener ('click',divicion);

function detectarEnter(e) {
    if(e.key == 'Enter') {
       suma()

    }
}

num1.addEventListener('keyup', detectarEnter)
num2.addEventListener('keyup', detectarEnter)