let provider = new firebase.auth.GoogleAuthProvider();
let persona = document.querySelector ('nombre')
let iniciar = document.querySelector (".inicio");


let boton = function() {
firebase.auth().signInWithPopup(provider)
.then(loginConExito)

    
}
iniciar.addEventListener ("click", boton)

let cambioDeusuario = function (usuario){
if (usuario) {
    usuario.displayName   +" "+  usuario.email
    
    //si hay
} else {
    //no hay

}
    console.log('El usuario cambio...')
    console.log(usuario)
}

firebase.auth().onAuthStateChanged(cambioDeusuario)

// iniciar sesion

let loginConExito = function (exito){
    console.log('exito')
}

let cerrarSesion = function(){
    firebase.auth().signOut()
}

