const songs = [
    { title: '远山少年', src: 'http://fsios.kugou.com/202602271943/7245ace3a091c494bd8dc35367799495/v3/070a5575eb5ac65acf120cfdc674b50c/yp/full/pi3_ct310000_s1942289472.mp3' },
    { title: '落了白', src: 'https://m701.music.126.net/20260227191846/2bd50697885bee01d7c1836e5ad84acb/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/77216720723/55da/1d42/6040/01e220a704c475a639d002d92500e297.mp3' },
    { title: '山高路远', src: 'https://m701.music.126.net/20260227191932/5879d6364b0c5168df678ac705db41bc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/76875706005/da55/fc5b/cf21/60ba88a66e0734a3097671dbff6cff40.mp3' }
];

let currentSongIndex = 0;
let isPlaying = false;
let audioPlayer = null;
let playIcon = null;
let pauseIcon = null;
let playIconMobile = null;
let pauseIconMobile = null;
let currentSongText = null;

function initMusicPlayer() {
    audioPlayer = document.getElementById('audio-player');
    playIcon = document.getElementById('play-icon');
    pauseIcon = document.getElementById('pause-icon');
    playIconMobile = document.getElementById('play-icon-mobile');
    pauseIconMobile = document.getElementById('pause-icon-mobile');
    currentSongText = document.getElementById('current-song');
    
    audioPlayer.addEventListener('ended', function() {
        nextSong();
    });
    
    loadSong();
}

function toggleMusic() {
    if (songs[currentSongIndex].src === '') {
        alert('请先在 music.js 文件中添加音乐链接！');
        return;
    }

    if (isPlaying) {
        audioPlayer.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playIconMobile) playIconMobile.style.display = 'block';
        if (pauseIconMobile) pauseIconMobile.style.display = 'none';
        isPlaying = false;
    } else {
        audioPlayer.play();
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playIconMobile) playIconMobile.style.display = 'none';
        if (pauseIconMobile) pauseIconMobile.style.display = 'block';
        isPlaying = true;
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    if (isPlaying) audioPlayer.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    if (isPlaying) audioPlayer.play();
}

function loadSong() {
    audioPlayer.src = songs[currentSongIndex].src;
    if (currentSongText) {
        currentSongText.textContent = '正在播放：' + songs[currentSongIndex].title;
    }
}

document.addEventListener('DOMContentLoaded', initMusicPlayer);
