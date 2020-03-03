let nombreApellidos = document.getElementById("nom-apell");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repPassword = document.getElementById("rep-password");
let iniSesBoton = document.getElementById("botton-ini-ses");
let form = document.getElementsByClassName("form-regis")[0];
let botonRegistro = document.getElementsByClassName("botton-registrar")[0];

//let formWrapper = document.getElementsByClassName("form-wrapper")[0];

let usuariosBD = JSON.parse(localStorage.getItem('Usuarios'))


botonRegistro.addEventListener("click", function(event){
    event.preventDefault();
    borrarErrores();
    
    if (comprobarUsuarioValido()){
        alert ("¡Usuario registrado!")
        crearUsuario(nombreApellidos.value, email.value, password.value)
        window.location.href = 'index.html'
    };
})

function comprobarUsuarioValido () {
    let validadorRegistro = new RegistroValidador (nombreApellidos.value, email.value, password.value, repPassword.value);
    
    let usuariosBD = JSON.parse(localStorage.getItem("Usuarios"));
    let usuarioValido = true;

    if(!validadorRegistro.comprobarNombreApellidos ()){
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
    if(!validadorRegistro.comprobarPasswordRepetida()){
        validadorRegistro.crearError("Las passwords no coinciden", repPassword)
        usuarioValido=false
    }
    if (!validadorRegistro.comprobarEmailEnBD(usuariosBD)){
        validadorRegistro.crearError("Este mail ya existe", email)
        usuarioValido=false
    }

    return usuarioValido
}
function borrarErrores (){
    let errores = [...document.getElementsByClassName("error")]
    errores ? errores.forEach(error => error.remove()) : null;
}

function crearUsuario (nombreApellidos, email, password) {
    const nuevoUsuario = new Usuario (nombreApellidos, email, password)

    if (usuariosBD){
        usuariosBD.push(nuevoUsuario);
    } else {
        usuariosBD = [nuevoUsuario]
    }
    localStorage.setItem('Usuarios', JSON.stringify(usuariosBD));
} 


/* let nom_apell = document.getElementById('nom-apell');
let email = document.getElementById('email');
let password = document.getElementById('password');
let rep_password = document.getElementById('rep-password');
let boton_registrar = document.querySelector('.botton-registrar')



function comprobar_datos () {

// Comprobación nombre y apellidos


if (nom_apell.value === undefined && (typeof nom_apell.value !== 'string')) {
    return alert ('Tienes que poner tu nombre y apellidos')
} else {
    localStorage.setItem('Nombre y apellidos', nom_apell.value)
}


// Comprobación email
let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


if (email.value === undefined && (re.test(email.value))) {
    return alert ('Tienes que poner un email válido')
} else {
    localStorage.setItem('Email', email.value)
}



// Comprobación password

if (password.value === undefined && (password.value.length < 8)) {
    return alert ('Tu password debe tener por lo menos 8 caracteres')
} else {
    localStorage.setItem('Password', password.value)
}



// Comprobación repetición password

if (rep_password.value === undefined && (rep_password.value !== password.value)) {
    return alert ('Tu password debe coincidir')
}  else {
    localStorage.setItem('Password', undefined)
}

}

boton_registrar.onclick = comprobar_datos;


function comprobar_nombre (nom_apell) {
    if (nom_apell.value === undefined && (typeof nom_apell.value !== 'string')) {
        return alert ('Tienes que poner tu nombre y apellidos')
    } else {
        localStorage.setItem('Nombre y apellidos', nom_apell.value)
    }
} */