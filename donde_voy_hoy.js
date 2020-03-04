const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('donde-voy-hoy');








/* let input_busqueda = document.getElementById('donde-voy-hoy')
let boton_busqueda = document.getElementsByClassName('botton-buscar');*/
let donde_voy_busqueda = document.getElementById('titulo-ciudad')




    fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${myParam}`)
        .then(response => response.json())
        .then(titulo => { 
              
        //TÍTULO CIUDAD     
        let tit_ciudad = titulo.title; 
        let crear_h2 = document.createElement('h2');
        crear_h2.innerHTML=tit_ciudad;
        crear_h2.className="titulo_ciudad_h2"
        donde_voy_busqueda.appendChild(crear_h2);
        
        //TEXTO INFO CIUDAD
        let parr_ciudad = titulo.extract_html;
        let crear_p = document.createElement('p');
        crear_p.innerHTML=parr_ciudad;
        crear_p.className="parraf_ciudad_p"
        donde_voy_busqueda.appendChild(crear_p);


        //IMAGEN CIUDAD
        let img_ciudad = titulo.originalimage.source;
        let crear_img = document.createElement('img');
        crear_img.src = img_ciudad
        crear_img.className="imag_ciudad_img"
        donde_voy_busqueda.appendChild(crear_img);    
    




        

            
        })





