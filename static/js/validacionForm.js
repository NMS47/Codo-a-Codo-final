var formulario = document.getElementsByName('form')[0]
var elementos = formulario.elements  // no se usa
var boton = document.getElementById('botonEnviar')  // no se usa


var validarApellido = function (e) {
    if (formulario.apellido.value == 0) {
        alert("Completa el campo apellido")
        e.preventDefault()
    }
}

var validarNombre = function (e) {
    if (formulario.nombre.value == 0) {
        alert("Completa el campo nombre")
        e.preventDefault()
    }
}

var validarCorreo = function (e) {
    if (formulario.email.value == 0 ||
        !(formulario.email.value).includes("@") ||
        !(formulario.email.value).includes(".")) {
        alert("Completa el campo correo electronico")
        e.preventDefault()
    }
}

var validarFechaDeNacimiento = function (e) {
    if (formulario.fechaNacimiento.value == 0) {
        alert("Completa el campo fecha de nacimiento")
        e.preventDefault()
    }
}

var validarSexo = function (e) {
    if (formulario.sexo[0].checked == true ||
        formulario.sexo[1].checked == true) {
    } else {
        alert("Selecciona un sexo")
        e.preventDefault()
    }
}


var validarConocimiento = function (e) {
    if (formulario.conocimiento[0].checked == false &&
        formulario.conocimiento[1].checked == false &&
        formulario.conocimiento[2].checked == false &&
        formulario.conocimiento[3].checked == false &&
        formulario.conocimiento[4].checked == false) {
        alert("Selecciona alguna opcion de sobre como nos conoce");
        e.preventDefault();
    }
}

var validarConsulta = function (e) {
    if (formulario.consulta.value == 0) {
        alert("Completa el campo consulta")
        e.preventDefault()
    }
}


var validarForm = function (e) {
    validarApellido(e)
    validarNombre(e)
    validarCorreo(e)
    validarFechaDeNacimiento(e)
    validarSexo(e)
    validarConocimiento(e)
    validarConsulta(e)
}

formulario.addEventListener("submit", validarForm)