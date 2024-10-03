// Array of songs with audio file and poster
const songs = [
    { id: "1", songName: "Dil", artist: "Kaushik-Guddu, Raghav Chaitanya, Kunaal Vermaa", poster: "1.jpg", audio: "audio/1.mp3" },
    { id: "2", songName: "Chale Jaana Phir", artist: "Denny, Kunaal Vermaa, Rahul Mishra", poster: "2.jpg", audio: "audio/2.mp3" },
    { id: "3", songName: "Bhula Diya", artist: "Darshan Raval", poster: "3.jpg", audio: "audio/3.mp3" },
    { id: "4", songName: "Dil Hai Na ", artist: "Aditya Rikhari", poster: "4.jpg", audio: "audio/4.mp3" },
    { id: "5", songName: "Bhula Diya", artist: "Darshan Raval", poster: "5.jpg", audio: "audio/5.mp3" },
    { id: "6", songName: "Bhula Diya", artist: "Darshan Raval", poster: "6.jpg", audio: "audio/6.mp3" },
    { id: "7", songName: "Bhula Diya", artist: "Darshan Raval", poster: "7.jpg", audio: "audio/7.mp3" },
    { id: "8", songName: "Bhula Diya", artist: "Darshan Raval", poster: "8.jpg", audio: "audio/8.mp3" },
    { id: "9", songName: "Bhula Diya", artist: "Darshan Raval", poster: "9.jpg", audio: "audio/9.mp3" },
    { id: "10", songName: "Bhula Diya", artist: "Darshan Raval", poster: "10.jpg", audio: "audio/10.mp3" },
    { id: "11", songName: "Bhula Diya", artist: "Darshan Raval", poster: "11.jpg", audio: "audio/11.mp3" },
    { id: "12", songName: "Bhula Diya", artist: "Darshan Raval", poster: "12.jpg", audio: "audio/12.mp3" }
    // Add the remaining songs here...
];

// Reference to audio element
let music = new Audio();

// Handle play button click for each song item
document.querySelectorAll('.playListPlay').forEach((element) => {
    element.addEventListener('click', function() {
        const songId = this.getAttribute('data-id'); // Get song ID from clicked button
        const song = songs.find(s => s.id === songId); // Find the song in the array

        if (song) {
            music.src = song.audio; // Set the audio source
            music.play(); // Play the song
            document.getElementById('title').innerHTML = `${song.songName} <div class="subtitle">${song.artist}</div>`; // Update song title and artist
            document.getElementById('poster_master_play').src = song.poster; // Update song poster
        }
    });
});

// Handle scrolling for popular songs and artists
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.querySelector('.pop_song');

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330; // Scroll right
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330; // Scroll left
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.querySelector('.item');

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330; // Scroll right
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330; // Scroll left
});

// Volume control
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');

vol.addEventListener('input', () => {
    music.volume = vol.value / 100; // Set music volume
    if (music.volume == 0) {
        vol_icon.classList.replace('bi-volume-up', 'bi-volume-mute');
    } else {
        vol_icon.classList.replace('bi-volume-mute', 'bi-volume-up');
    }
});
