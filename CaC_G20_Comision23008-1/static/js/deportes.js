function accionBotones(e) {
    let iconoD = document.querySelector("#iconoDeporte");
    let nombreD = document.querySelector("#tituloDeporte");
    let horaPractD = document.querySelector("#horaPractica");

    let contenidoD = document.querySelector("#contenidoDeporte");
    let imagenD = document.querySelector("#imagenDeporte");

    switch (e.target.id) {
        case "btnCrossfit":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-solid fa-dumbbell"></i>`;
            nombreD.innerHTML = "Crossfit";
            horaPractD.innerHTML = `Lunes y Miércoles 18:00hs <br> Martes y Jueves 14:00hs`;
            contenidoD.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;

            break;

        case "btnAtletismo":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-solid fa-person-running"></i><br>`;
            nombreD.innerHTML = "Atletismo";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = "<img src={{url_for('static', filename='img/atletismoM.jpg')}} alt='' width='30%' >"
            break;

        case "btnFutbol":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-regular fa-futbol"></i><br>`;
            nombreD.innerHTML = "Fútbol";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src={{url_for("static", filename="img/futbol.jpg")}} alt="" width="30%" >`
            break;
        case "btnHockey":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<img class="ancho-img" src={{url_for("static", filename="img/hockey-icon.png")}}><br>`;
            nombreD.innerHTML = "Hockey";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src={{url_for("static", filename="img/hockey.jpg")}} alt="" width="30%" >`
            break;


        case "btnBasketball":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-sharp fa-solid fa-basketball"></i><br>`;
            nombreD.innerHTML = "Basketball";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src={{url_for("static", filename="img/basketball.jpg")}} alt="" width="30%" >`
            break;
        case "btnArtesMarciales":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<img class="ancho-img"src="./img/artesMarciales-iconNegro.png"><br>`;
            nombreD.innerHTML = "Artes Marciales";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="../img/artesMarciales.jpg" alt="" width="30%" >`
            break;
        case "btnPingPong":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-solid fa-table-tennis-paddle-ball"></i>`;
            nombreD.innerHTML = "Ping Pong";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/pingPong3.jpg" alt="" width="30%>`
            break;
        case "btnNatacion":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-solid fa-person-swimming"></i>`;
            nombreD.innerHTML = "Natación";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/natacion1.webp" alt="" width="30%>`
            break;
        case "btnCiclismo":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-solid fa-person-biking"></i>`;
            nombreD.innerHTML = "Ciclismo";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/ciclismo.jpg" alt="" width="30%>`
            break;
        case "btnVoley":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-solid fa-volleyball"></i>`;
            nombreD.innerHTML = "Voley";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/voley.jpg" alt="" width="30%>`
            break;
        case "btnTenis":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<img class="ancho-img" src="./img/tenis-iconNegro.png">`;
            nombreD.innerHTML = "Tenis";
            horaPractD.innerHTML = `Lunes y Miércoles 10:00hs <br> Martes y Jueves 19:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/tenis2.jpeg" alt="" width="30%>`
            break;

        case "btnBoxRecreativo":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<img class="ancho-img"src="./img/boxeo-iconNegro.png">`;
            nombreD.innerHTML = "Box Recreativo";
            horaPractD.innerHTML = `Lunes, Miércoles y viernes 08:00hs <br> Martes y Jueves 8:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/boxRecreativo.jpg" alt="" width="30%>`
            break;

        case "btnGimnasiaArtistica":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<img class="ancho-img" src="./img/gimnasiaRitmica-iconNegro.png" >`;
            nombreD.innerHTML = "Gimnasia Artística";
            horaPractD.innerHTML = `Lunes, Miércoles y viernes 08:00hs <br> Martes y Jueves 8:00hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/gimnasiaArtistica.jpg" alt="" width="30%>`
            break;
        case "btnAjedrez":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `<i class="fa-solid fa-chess"></i>`;
            nombreD.innerHTML = "Ajedrez";
            horaPractD.innerHTML = `Lunes, Miércoles y viernes 18:30hs <br> Martes y Jueves 19:30hs`

            contenidoD.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a libero elit. Sed dapibus pellentesque risus, vel finibus libero facilisis id. Curabitur vestibulum finibus feugiat. Quisque laoreet scelerisque nibh a elementum. Pellentesque iaculis urna eget dolor dignissim sagittis vitae vitae ligula. Curabitur non libero eros. Donec eu cursus urna. Suspendisse ac risus quis justo condimentum interdum. Integer et arcu risus. Suspendisse commodo purus blandit leo laoreet porta. Aenean euismod eu erat sit amet sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum dapibus diam eu mauris mollis cursus. Nunc et libero libero. Etiam eu orci rhoncus, dignissim.`;
            imagenD.innerHTML = `<img src="./img/ajedrez.jpg" alt="" width="30%>`
            break;
        case "btnVolver":
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "";
            document.getElementById("textoDeportes").style.display = "none";
            break;

        default:
            // Muestra y visualiza secciones
            document.getElementById("tarjetasDeportes").style.display = "none";
            document.getElementById("textoDeportes").style.display = "";

            //Modifica Elementos del formulario
            iconoD.innerHTML = `Sin/Determinar`;
            nombreD.innerHTML = "Nombre del Deporte";
            horaPractD.innerHTML = `No establecido`

            contenidoD.innerHTML = `Contenido y/o descripción del deporte`;
            imagenD.innerHTML = `Sin imagen.`
            break;
    }

}
document.getElementById("textoDeportes").style.display = "none";


const btnform = document.getElementsByClassName("botonDetalles");
// console.log(btnform);
for (let i = 0; i < btnform.length; i++) {
    btnform[i].addEventListener("click", accionBotones);

}