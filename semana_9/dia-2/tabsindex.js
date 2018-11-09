

let imaganes = document.querySelector ("contenedorpadre");
let informacion = document.querySelector ("contendorinfo");

let mostrar = function(event){
let src = event.target.src
document.querySelector('.contenedorinfo').src = src
document.querySelector('.info')
.classList.add('active')
}

for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', mostrar)
}
