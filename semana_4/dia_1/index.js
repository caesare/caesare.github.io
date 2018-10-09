
// Modals
// variable global dentro de exploradores
window
//Alert
window.alert ('alerta')
// Ccomfirm
if (window.confirm("seguro que quieres hacer eso?")) {
    window.alert("si")
    }
        else {  window.alert("no")
    }



let num1 = 50
let num2 = 100
window.alert("num1 + num2")

if(window.confirm("sumar?")) {
    window.alert (num1 + num2)
    } 
    else {
        window.alert (num1 - num2)
    }
    
// Promp
let elnombre=("CESAR")
let nombre=window.prompt('ingreas nombre')
window.alert(`mi nombre es ${elnombre}`)

// parseFloat("6.4")
// pareseInt("6.2") 6



 let numero=window.prompt("ingresa numerouno")
 let numerodos=window.prompt("ingresa numerodos")
 numero = parseFloat(numero)
 numerodos = parseFloat(numerodos)
 
window.alert(`los numeros son ${numero + numerodos}`) 


let cuenta=window.prompt ("ingresatotal")
let propina=window.prompt ("ingresapropina")
cuenta = parseFloat(cuenta)
propina = parseFloat(propina)

window.alert (`totaldecuentaconpropina ${cuenta + propina}`)

var miBoton = document.querySelector('button')

function diHola() {
    window.alert('hola');
}

miBoton.addEventListener('click', diHola);


