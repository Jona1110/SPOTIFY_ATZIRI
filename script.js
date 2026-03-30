/*
  =========================================
  ATZIRI PREMIUM - REPRODUCTION ENGINE
  Designed by DIGITALITY
  =========================================
*/

const songs = [
    { title: 'Mi Corazón', artist: 'MC Davo', date: '17/09/24', file: 'music/Mi_Corazon.mp3', image: 'img/mi_corazon.jpg' },
    { title: 'El Color de tus Ojos', artist: 'Banda MS', date: '16/10/24', file: 'music/El_color_de.mp3', image: 'img/color_ojos.jpg' },
    { title: 'Una más para ti', artist: 'Cornelio Vega', date: '31/10/24', file: 'music/Una_mas_para.mp3', image: 'img/una_mas.jpg' },
    { title: 'Ojos de Amor', artist: 'Manuel Lizarazo', date: '05/10/24', file: 'music/Ojos_de_amor.mp3', image: 'img/ojos_amor.jpg' },
    { title: 'Lo que te amo', artist: 'Crecer Germán', date: '08/11/24', file: 'music/Lo_que_te_amo.mp3', image: 'img/lo_que_te_amo.jpg' },
    { title: 'Y que quede claro', artist: 'La Arrolladora', date: '29/11/24', file: 'music/Y_que_quede.mp3', image: 'img/arrolladora.jpg' },
    { title: 'De ti Exclusivo', artist: 'La Arrolladora', date: '21/12/24', file: 'music/De_ti_exclusivo.mp3', image: 'img/arrolladora.jpg' },
    { title: 'Y Cambio mi Suerte', artist: 'Virlan García', date: '06/01/25', file: 'music/Y_cambio_mi.mp3', image: 'img/cambio_suerte.jpg' },
    { title: 'Me Gusta Todo de ti', artist: 'El Recodo', date: '12/02/25', file: 'music/Me_gusta_todo_de_ti.mp3', image: 'img/recodo.jpg' },
    { title: 'Todo Porque te Amo', artist: 'Fidel Rueda', date: '20/01/25', file: 'music/Todo_porque.mp3', image: 'img/fidel_rueda.jpg' },
    { title: 'Entre Beso y Beso', artist: 'La Arrolladora', date: '12/02/25', file: 'music/Entre_Beso.mp3', image: 'img/arrolladora.jpg' },
    { title: 'Te Regalo', artist: 'Rels B', date: '05/03/25', file: 'music/Te_regalo.mp3', image: 'img/rels_b.jpg' },
    { title: 'El Amor de mi Vida', artist: 'La Adictiva', date: '06/03/25', file: 'music/El_Amor_De.mp3', image: 'img/adictiva.jpg' },
    { title: 'Queda Restringido', artist: 'Los Perdidos de Sinaloa', date: '11/03/25', file: 'music/Queda_Restringido.mp3', image: 'img/perdidos.jpg' },
    { title: 'Mi Bello Angel', artist: 'Los Primos MX', date: '26/03/25', file: 'music/Mi_Bello.mp3', image: 'img/primos_mx.jpg' },
    { title: 'Contigo', artist: 'Calibre 50', date: '16/04/25', file: 'music/Contigo.mp3', image: 'img/calibre50.jpg' },
    { title: 'Voy a Amarte', artist: 'Perdidos de Sinaloa', date: '27/04/25', file: 'music/voy_a_amarte.mp3', image: 'img/perdidos.jpg' },
    { title: 'Es Por Ti', artist: 'Juanes', date: '30/05/25', file: 'music/es_por_ti.mp3', image: 'img/juanes.jpg' },
    { title: 'Tal como Eres', artist: 'Gerardo Ortiz', date: '30/05/25', file: 'music/tal_como_eres.mp3', image: 'img/gerardo_ortiz.jpg' },
    { title: 'Eres', artist: 'Café Tacuba', date: '18/08/25', file: 'music/Eres.mp3', image: 'img/cafe_tacuba.jpg' },
    { title: 'Mi Mayor Anhelo', artist: 'Banda MS', date: '25/08/25', file: 'music/Anhelo.mp3', image: 'img/banda_ms.jpg' },
    { title: 'Una entre un Millón', artist: 'Banda Rancho Viejo', date: '2/12/25', file: 'music/una_entre.mp3', image: 'img/una_entre.jpeg' }
];

let songIndex = 0;
const audio = document.getElementById('main-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressFill = document.getElementById('progress-fill');
const progressContainer = document.getElementById('progress-container');
const volumeSlider = document.getElementById('volume-slider');
const footerImg = document.getElementById('footer-img');

// Renderizar tabla al cargar
window.onload = () => {
    const tbody = document.querySelector('#playlist-table tbody');
    songs.forEach((song, i) => {
        const row = document.createElement('tr');
        row.className = 'song-row';
        row.id = `song-${i}`;
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>
                <div class="song-info-cell">
                    <span class="song-name">${song.title}</span>
                    <span class="artist">${song.artist}</span>
                </div>
            </td>
            <td>Nuestra Historia</td>
            <td>${song.date}</td>
        `;
        row.onclick = () => loadSong(i);
        tbody.appendChild(row);
    });
};

function loadSong(index) {
    // Quitar resaltado anterior
    document.querySelectorAll('.song-row').forEach(r => r.style.color = "");
    document.querySelectorAll('.song-name').forEach(n => n.style.color = "");

    songIndex = index;
    const song = songs[songIndex];

    // Actualizar UI
    document.getElementById('footer-title').innerText = song.title;
    document.getElementById('footer-artist').innerText = song.artist;
    footerImg.src = song.image;

    // Resaltar canción actual en verde
    const currentRow = document.getElementById(`song-${index}`);
    if(currentRow) {
        currentRow.querySelector('.song-name').style.color = "#1db954";
    }

    audio.src = song.file;
    audio.load();
    playSong();
}

function playSong() {
    audio.play();
    playPauseBtn.classList.replace('fa-play-circle', 'fa-pause-circle');
}

function pauseSong() {
    audio.pause();
    playPauseBtn.classList.replace('fa-pause-circle', 'fa-play-circle');
}

// Navegación
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
}

// Eventos
playPauseBtn.addEventListener('click', () => {
    if (!audio.src) loadSong(0);
    else audio.paused ? playSong() : pauseSong();
});

audio.addEventListener('timeupdate', () => {
    const { duration, currentTime } = audio;
    if (duration) {
        const percent = (currentTime / duration) * 100;
        progressFill.style.width = `${percent}%`;
        document.getElementById('current-time').innerText = formatTime(currentTime);
        document.getElementById('duration-time').innerText = formatTime(duration);
    }
});

// Adelantar/Atrasar canción al hacer clic en la barra
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

// Control de Volumen
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// Auto-play siguiente canción
audio.addEventListener('ended', nextSong);

function formatTime(t) {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
}

// Navegación de secciones (SPA)
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    document.getElementById(`section-${id}`).style.display = 'block';
    document.getElementById(`link-${id}`).classList.add('active');
}

/* === AÑADE ESTO AL FINAL DE TU script.js === */

const searchInput = document.getElementById('search-input');
const searchResultsContainer = document.getElementById('search-results');

// Función para renderizar resultados de búsqueda
function renderSearchResults(filteredSongs) {
    searchResultsContainer.innerHTML = ''; // Limpiar contenedor

    if (filteredSongs.length === 0) {
        searchResultsContainer.innerHTML = '<p style="color: #b3b3b3;">No encontramos canciones con ese nombre.</p>';
        return;
    }

    filteredSongs.forEach((song) => {
        // Encontrar el índice original para que funcione el clic
        const originalIndex = songs.findIndex(s => s.title === song.title);
        
        const card = document.createElement('div');
        card.style.cssText = `
            background: #181818; 
            padding: 16px; 
            border-radius: 8px; 
            cursor: pointer; 
            transition: background 0.3s;
        `;
        card.innerHTML = `
            <img src="${song.image}" style="width: 100%; border-radius: 4px; margin-bottom: 12px; aspect-ratio: 1/1; object-fit: cover;">
            <p style="font-weight: 700; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.title}</p>
            <p style="color: #b3b3b3; font-size: 14px; margin-top: 4px;">${song.artist}</p>
        `;
        
        card.onmouseover = () => card.style.background = '#282828';
        card.onmouseout = () => card.style.background = '#181818';
        card.onclick = () => {
            loadSong(originalIndex);
            showSection('home'); // Opcional: volver al inicio al elegir canción
        };
        
        searchResultsContainer.appendChild(card);
    });
}

// Escuchar lo que el usuario escribe
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = songs.filter(song => 
        song.title.toLowerCase().includes(term) || 
        song.artist.toLowerCase().includes(term)
    );
    renderSearchResults(filtered);
});

// Inicializar con todas las canciones cuando se abra la sección por primera vez
renderSearchResults(songs);

// Saludo dinámico (Buenos días/tardes/noches)
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    if (hour < 12) greeting.innerText = "¡Buenos días, Atziri! ☀️";
    else if (hour < 19) greeting.innerText = "¡Buenas tardes, Atziri! ✨";
    else greeting.innerText = "¡Buenas noches, Atziri! 🌙";
}

// Control de vistas dentro de Inicio
function showFullPlaylist() {
    document.querySelector('.home-dashboard').style.display = 'none';
    document.getElementById('full-playlist-view').style.display = 'block';
}

function hideFullPlaylist() {
    document.querySelector('.home-dashboard').style.display = 'block';
    document.getElementById('full-playlist-view').style.display = 'none';
}

// Llamar al saludo al cargar
window.addEventListener('load', updateGreeting);