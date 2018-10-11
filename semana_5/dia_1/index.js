
console.log('detectar');

let button0 = document.querySelector( '#boxmicro');
let button1 = document.querySelector( '.buscarConGoogle');


function detectarEnter(e) {
    if(e.key == 'Enter') {
        window.location.href = "https://www.google.com/search?q="+ button0.value
       
    }
}

    button0.addEventListener('keyup', detectarEnter);



function buscar(b) {
    (button1 == 'click') 
        window.location.href = "https://www.google.com/search?q="+ button0.value
       
    }

    button1.addEventListener('click', buscar);





