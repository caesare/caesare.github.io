let provider = new firebase.auth.GoogleAuthProvider();
let persona = document.querySelector ('nombre')
let iniciar = document.querySelector (".inicio");
let cerrado = document.querySelector (".cerrar")
let cuenta = document.querySelector ('.contador');
let db = firebase.database()



//login
let boton = function() {
firebase.auth().signInWithPopup(provider)
.then(loginConExito)

    
}
iniciar.addEventListener ("click", boton)

//cambio de estado
let cambioDeusuario = function (usuario){
if (usuario) {
    usuario.displayName   +" "+  usuario.email
    
    //si hay
} else {
    //no hay

}
    console.log('El usuario cambio de estado...')
    console.log(usuario)
}

firebase.auth().onAuthStateChanged(cambioDeusuario)

//impresion de iniciar sesion

let loginConExito = function (exito){
    console.log('exito')
}


//impresion de cerrar sesion

let cerrarSesion = function (){
    console.log('cerrado')
    firebase.auth().signOut()
}

cerrado.addEventListener("click",cerrarSesion)


//contador
let input = function (){
    console.log('masuno') 
}
cuenta.addEventListener("clck",input)



let actualizarContador = function (valor){
    db.ref('/contador').set(valor+1);
}

let contador = function (respuesta){
     let valor = respuesta.val()

    }
console.log (url.emai)
db.ref('/contador').on('value',contador);