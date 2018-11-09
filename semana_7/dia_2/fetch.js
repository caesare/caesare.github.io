/*
  Fetch te permite solicitar recursos por medio
  de la red, generalmente hacia otros servidores

  Se utiliza el protocolo HTTP

  A traves de una URL se obtendrá una respuesta

  la respuesta puede ser un objeto de javascript
  o puede ser texto plano

  https://rickandmortyapi.com/

*/

// Fetch aplicado al API de rick and morty


let agregar = function(tarjeta) {
  console.log(tarjeta);
  document.querySelector(".misTarjetas").innerHTML +=
 
  `
  
  <div class=info>
    <img  src="${tarjeta.image}">
    <div class="name edicion"> NAME "${tarjeta.name}"</div>
    <div class="type edicion"> TYPE "${tarjeta.type}"</div>
    <div class="gender edicion"> GENDER "${tarjeta.gender}"</div>
    <div class="origin edicion"> ORIGIN "${tarjeta.origin.name}"</div>
    <div class="status edicion"> STATUS "${tarjeta.status}"</div>
    <div class="species edicion"> SPECIES "${tarjeta.species}"</div>
  </div>

`
}

let next= document.querySelector (".NEXT");
let back= document.querySelector ('.BACK');
let url
let prev
let respuesta = function(res){
  document.querySelector(".misTarjetas").innerHTML = ""
 
  console.log(res); 
  url= (res.info.next)
  prev=(res.info.prev)
  for(let i=0;i<res.results.length;i=i+1)
  {agregar (res.results[i])}
  }
fetch("https://rickandmortyapi.com/api/character/?page=2")
  .then(res => res.json())
  .then(respuesta)

  
// Declaramos el evento 
next.addEventListener('click', function() {
  fetch (url)
  .then(res => res.json())
  .then(respuesta)
})
   
back.addEventListener('click', function() {
  fetch (prev)
  .then(res => res.json())
  .then(respuesta)
})
   