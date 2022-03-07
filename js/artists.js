function addArtists() {
    let artista= {
        nombre : document.getElementById("nombre").value,
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

