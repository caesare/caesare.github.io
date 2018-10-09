// buttons
let clickcalcular = document.querySelector('#clickcalcular');
// inputs

function indiceDeMasaCorporal (x, y) {
    let altura = +document.querySelector('#clickaltura').value;
    let peso = +document.querySelector('#clickpeso').value;
    let IMC = (peso / Math.pow(altura, 2) ).toFixed(2);
    document.querySelector ('#IMC').value = IMC;
}

   clickcalcular.addEventListener('click',indiceDeMasaCorporal)

  

