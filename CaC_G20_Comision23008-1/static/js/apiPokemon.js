document.querySelector('#buscar').addEventListener("click", getPokemon)

function numAleatorioEntreMinYMax(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function obtenerHabilidadesPokemon(datosHabilidades) {
    var habilidades = '<p class="p2"><b>Habilidades:</b></p>'
    if (datosHabilidades.length > 0){
        for (let i = 0; i < datosHabilidades.length; i++) {
            habilidades += `<p class="p2">${datosHabilidades[i].ability.name}</p>`
        }
    } else {
        habilidades = '<p class="p2">Sin habilidades</p>'
    }
    return habilidades
}

function getPokemon() {
    const idPokemon = numAleatorioEntreMinYMax(1, 1010)

    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const habilidadesPokemon = obtenerHabilidadesPokemon(data.abilities)

            document.querySelector(".cuadroPokemon").innerHTML = `
                <div>
                    <center>
                        <img
                            src='${data.sprites.other["official-artwork"].front_default}';
                            alt="${data.name}";
                            width= 350px;
                        />
                    </center>
                </div>

                <div class="infoPokemon">
                    <h1 class="nombre">${data.name[0].toUpperCase() + data.name.substring(1)}</h1>
                    <p class="p0"><b>Información:</b></p>
                    <p class="p0">Peso: ${data.weight} | Altura: ${data.height}</p>

                    <br>
                    <p class="p0"><b>Estadísticas de combate:</b></p>
                    <p class="p0">Vida: ${data.stats[0].base_stat} | Velocidad: ${data.stats[5].base_stat}</p>
                    <p class="p0">Ataque: ${data.stats[1].base_stat} | Ataque especial: ${data.stats[3].base_stat}</p>
                    <p class="p0">Defensa: ${data.stats[2].base_stat} | Defensa especial: ${data.stats[4].base_stat}</p>
                </div>
                <div class="experiencia">
                    <p class="p1">Este pokemon tiene ${data.base_experience} puntos de experiencia base.<br>
                    Aprovechamos para avisarte que desde Wollff creemos que nadie nace sabiendo,<br>
                    y no es necesario tener experiencia previa para poder mejorar la práctica de cualquier deporte.</p>
                </div>
                <div class="habilidades">
                    <p class="p2">${habilidadesPokemon}</p>
                </div>
            `
        }
    )
}