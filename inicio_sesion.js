let nombreApellidos = document.getElementById("nom-apell");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repPassword = document.getElementById("rep-password");
let iniSesBoton = document.getElementsByClassName("botton-ini-ses")[0];
let form = document.getElementsByClassName("form-ini-ses")[0];
let botonRegistro = document.getElementsByClassName("botton-registrar")[0];

//let formWrapper = document.getElementsByClassName("form-wrapper")[0];

let usuariosBD = JSON.parse(localStorage.getItem('Usuarios'))


iniSesBoton.addEventListener("click", function(event){
    event.preventDefault();
    borrarErrores();
    
    if (comprobarUsuarioValido()){
        alert ("Sesión iniciada!")
        window.location.href = 'index.html'
    };
})

function comprobarUsuarioValido () {
    let validadorRegistro = new InicioSesionValidador(nombreApellidos.value, email.value, password.value);
    
    let usuariosBD = JSON.parse(localStorage.getItem("Usuarios"));
    let usuarioValido = true;

    if(!validadorRegistro.comprobarNombreApellidos()){
        
        validadorRegistro.crearError("Por favor, introduce un nombre válido", nombreApellidos)
        usuarioValido=false
    }
    if(!validadorRegistro.comprobarEmail()){
        validadorRegistro.crearError("Por favor, introduce una dirección de mail válida", email)
        usuarioValido=false
    }
    if(!validadorRegistro.comprobarPassword()){
        validadorRegistro.crearError("Por favor, introduce una password válida", password)
        usuarioValido=false
    }
    
    /* if (!validadorRegistro.comprobarEmailEnBD(email.value)){
        validadorRegistro.crearError("Este mail no existe", email)
        usuarioValido=false
    } */

    return usuarioValido
}


function borrarErrores (){
    let errores = [...document.getElementsByClassName("error")]
    errores ? errores.forEach(error => error.remove()) : null;
}
