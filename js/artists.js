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

function listArtists() {
    let artistas = JSON.parse(localStorage.getItem('artistas'));
    let artitasView = document.getElementById('table');
    artitasView.innerHTML = '';
    for (let i = 0; i < artistas.length; i++) {
        let nombre = artistas[i].nombre;
        let imagen = artistas[i].imagen

        artitasView.innerHTML += `
        <div class="card">
            <img src="${imagen}" alt="Avatar" style="width:30%">
            <div class="container">
                <h4><b>${nombre}</b></h4> 
                <p>Architect & Engineer</p>
            </div>
        </div>`;
    }
}
listArtists()
