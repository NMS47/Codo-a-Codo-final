function calculateAge() {
    var fechaNacimiento = document.getElementById('fechanacimiento').value;
    var hoy = new Date();
    var fechaNacimiento = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var m = hoy.getMonth() - fechaNacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    document.getElementById('edad').value = edad;
    }