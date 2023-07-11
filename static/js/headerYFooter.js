class Header{
    constructor(index, deportes, consultas, institucional){
        this.index = index
        this.deportes = deportes
        this.consultas = consultas
        this.institucional = institucional
    }
}
var miheader = new Header("<a href=./templates/index.html class='header-item'>INICIO</a>", "<a href=templates/deportes.html class='header-item'>DEPORTES</a>", "<a href=templates/consultas.html  class='header-item'>CONSULTAS</a>", "<a href=templates/institucional.html class='header-item'>INSTITUCIONAL</a>")

//INICIO DE BOTONES DE HEADER//
//BOTON INDEX//
function linkIndex(){
    var link = `${miheader.index}`
    return link
}
function botonIndex(){
    document.write(linkIndex())
}

//BOTON DEPORTES//
function linkDeportes(){
    var link = `${miheader.deportes}`
    return link
}
function botonDeportes(){
    document.write(linkDeportes())
}

//BOTON CONSULTAS//
function linkConsultas(){
    var link = `${miheader.consultas}`
    return link
}
function botonConsultas(){
    document.write(linkConsultas())
}

//BOTON INSTITUCIONAL//
function linkInstitucional(){
    var link = `${miheader.institucional}`
    return link
}

function botonInstitucional(){
    document.write(linkInstitucional())
}

function crearHeader(){
    botonIndex()
    botonDeportes()
    botonInstitucional()
    botonConsultas()
}

//FIN DE BOTONES DEL HEADER
//INICIO DEL SCRIPT FOOTER

class Footer{
    constructor(integrantes, sitio, fecha){
    this.integrantes = integrantes
    this.sitio = sitio
    this.fecha = fecha
    }
}

var mifooter = new Footer("Francisco Antonio Pereyra - Fabricio Denuncio - Nicolas Salvadores", "Club Social Deportivo Wollff", crearFecha())

function crearFecha(){
    var fecha = new Date()
    return fecha
}

function crearFooter(){
    var texto = `<span><a href="www.facebook.com" class="fa fa-facebook" id="fb"></a></span>
                 <span><a href="www.instagram.com" class="fa fa-instagram" id="ig"></a></span>
                 <span><a href="www.twitter.com" class="fa fa-twitter" id="twt"></a></span><br>
                 Página realizada por: ${mifooter.integrantes}.<br> ${mifooter.fecha}`
    return texto
}

function mostrarFooter(){
    document.write(crearFooter())   
}