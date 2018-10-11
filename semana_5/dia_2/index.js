// cambiando clases de un elemento

let x = document.querySelector('.elemento_x');
let y = document.querySelector('.elemento_y');
let z = document.querySelector('.elemento_z');

// classList
let  hacerToggle = function() {
    z.classList.toggle('grande');
}
z.addEventListener('click',hacerToggle);

console.log("prueba");
