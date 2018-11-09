

let imagenes = 
document.querySelectorAll('.contenedor img')

let mostrar = function(event) {
    let src = event.target.src
    document.querySelector('.modal img').src = src
    document.querySelector('.modal')
    .classList.add('active')
}

for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', mostrar)
}

let close = document.querySelector('.close')
close.addEventListener('click',function() {
document.querySelector('.modal')
.classList.remove('active')
})