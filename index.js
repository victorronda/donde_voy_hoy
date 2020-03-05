/*const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('donde-voy-hoy');
console.log(myParam);

let input_busqueda = document.getElementById('donde-voy-hoy')
let boton_busqueda = document.getElementsByClassName('botton-buscar');
let donde_voy_busqueda = document.getElementsByTagName('titulo-ciudad')


    fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${myParam}`)
        .then(response => response.json())
        .then(titulo => { 
            console.log(titulo)
        let tit_ciudad =titulo.title;    
        let crear_h2= document.createElement('h2');
        crear_h2.innerHTML=tit_ciudad;
        donde_voy_busqueda.appendChild(crear_h2);   
            
        })
boton_busqueda.onclick = busqueda
*/



let car_lap = document.querySelectorAll('.car-lap');
let car_mov = document.querySelectorAll('.car-mov');




