function addArtists() {
    let artista = {
        nombre: document.getElementById("nombre").value,
        imagen: document.getElementById("imagen").value
    }
    if (localStorage.getItem('artistas') === null) {
        let artistass = [];
        artistass.push(artista);
        localStorage.setItem('artistas', JSON.stringify(artistass));
    } else {
        let artistaFull = JSON.parse(localStorage.getItem('artistas'));
        artistaFull.push(artista);
        localStorage.setItem('artistas', JSON.stringify(artistaFull));
    }
}

function searchArtists() {
    let nombreBuscar = document.getElementById("buscador").value
    let artistas = JSON.parse(localStorage.getItem('artistas'));
    const buscado = artistas.filter(word => word.nombre == nombreBuscar);

    if (buscado.length > 0) {
        console.log(buscado);
        let artitasView = document.getElementById('table');
        artitasView.innerHTML = '';
        for (let i = 0; i < buscado.length; i++) {
            let nombre = buscado[i].nombre;
            let imagen = buscado[i].imagen

            artitasView.innerHTML += `
            <div class="card">
                <img src="${imagen}" alt="Avatar" style="width:30%">
                <div class="container">
                    <h4><b>${nombre}</b></h4> 
                    <p>Architect & Engineer</p>
                </div>
            </div>`;
        }
    } else {
        let artitasView = document.getElementById('table');
        artitasView.innerHTML = '';
        artitasView.innerHTML +=
            `<div>
                <p>"No se encontraron datos!"</p>
        </div>`;
    }
}