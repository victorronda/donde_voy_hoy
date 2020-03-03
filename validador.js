"use strict";

class Validador {
    constructor(nombreApellidos, email, password){
        this.nombreApellidos = nombreApellidos;
        this.email = email;
        this.password = password;
    }

    comprobarNombreApellidos () {
        return this.nombreApellidos ? true : false
    }

    comprobarEmail () {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email) ? true : false
    }

    comprobarPassword () {
        if (!this.password){
            return false
        } else if (this.password.length < 8){
            return false
        } else {
            return true
        }
    }
    
    crearError (mensaje, localizacion) {
        let div = document.createElement("div")
        div.setAttribute("class", "error")
        div.innerHTML = mensaje
        form.insertBefore(div, localizacion)
    }

    borrarErrores (){
        let errores = [...document.getElementsByClassName("error")]
        errores ? errores.forEach(error => error.remove()) : null;
    }
}

class RegistroValidador extends Validador {
    constructor (nombreApellidos, email, password, repetirPassword){
        super(nombreApellidos, email, password);
        this.repetirPassword = repetirPassword
    }

    comprobarEmailEnBD (usuariosBD){
        let usuarioExiste = true;

        if (!usuariosBD){
            return true;
        }
        else{
            usuariosBD.forEach(user => {
                if (user.email === this.email){
                    usuarioExiste=false
                }
            })
        }
        return usuarioExiste;
    }

    comprobarPasswordRepetida() {
        if(this.password === this.repetirPassword) {
            return true;
        } else {
            return false;
        } 
    }
}

class InicioSesionValidador extends Validador {
    /* constructor (nombreApellidos, email, password){
        super(nombreApellidos, email, password);
    } */

    comprobarEmailEnBD (string){
        let usuarioExiste = false;

        if (!usuariosBD){
            return false
        }
        else{
            usuariosBD.forEach(user => {
                if (user.email === string){usuarioExiste = true}
            })
        }
        return usuarioExiste
    }

}
