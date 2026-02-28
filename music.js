const songs = [
    { title: '远山少年', src: 'http://fsios.kugou.com/202602271943/7245ace3a091c494bd8dc35367799495/v3/070a5575eb5ac65acf120cfdc674b50c/yp/full/pi3_ct310000_s1942289472.mp3' },
    { title: '落了白', src: 'https://m701.music.126.net/20260227191846/2bd50697885bee01d7c1836e5ad84acb/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/77216720723/55da/1d42/6040/01e220a704c475a639d002d92500e297.mp3' },
    { title: '山高路远', src: 'https://m701.music.126.net/20260227191932/5879d6364b0c5168df678ac705db41bc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/76875706005/da55/fc5b/cf21/60ba88a66e0734a3097671dbff6cff40.mp3' },
    { title: '白头若是雪可替', src: 'http://fsios.kugou.com/202602272212/2a197b37b2b5e4beadab7478caed8057/v3/d005c036686f081e2f6f5fec20c6b72a/yp/full/pi3_ct310000_s2747454254.mp3' },
    { title: '重生我在异乡为异客', src: 'hhttp://fsios.kugou.com/202602272222/487da849be2bbd7d221089363cbcfebb/v3/62c3ad217a2c1a2873174b357ddf730d/yp/full/pi3_ct310000_s1867841380.mp3' },
    { title: '游山恋', src: 'http://fsios.kugou.com/202602272224/f5f08a40d0f8a4760a3a4ec896281bfc/v3/a4789ba8d51d6cdd83f474b30d970d55/yp/full/pi3_ct310000_s537190673.mp3' },
    { title: '知我', src: 'http://fsios.kugou.com/202602272235/44df1f36bd03ee00f4bfefb96c258de3/v3/98c39cfcba6ddbdef8474ffd8326f40f/yp/full/pi3_ct310000_s1766907773.mp3' },
    { title: '我在人间逍遥游', src: 'http://fsios.kugou.com/202602281056/b28a3e92fd5e4bf556c99913b8c9e17a/v3/a7f251a04baf32bfbd246ebd545a1f0c/yp/full/pi3_ct310000_s444028657.mp3' },
    { title: '雪山开出了格桑花', src: 'http://fsios.kugou.com/202602281057/1948e1925c8fe4fcb363d03e66064577/v3/569bf5f949ff403d08b9f934c3b51025/yp/full/pi3_ct310000_s4280359964.mp3' },
    { title: '月亮照山川', src: 'http://fsios.kugou.com/202602281107/cd46e7a03b953ede36bb8288c2877ea0/v3/9bbb2b020be26dd4c0e65d3d502bf115/yp/full/pi3_ct310000_s2840147546.mp3' }
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
    
    if (audioPlayer) {
        audioPlayer.addEventListener('ended', function() {
            nextSong();
        });
    }
    
    loadSong();
}

function toggleMusic() {
    if (!audioPlayer) return;
    
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
    if (!audioPlayer) return;
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    if (isPlaying) {
        audioPlayer.play();
    }
}

function prevSong() {
    if (!audioPlayer) return;
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    if (isPlaying) {
        audioPlayer.play();
    }
}

function loadSong() {
    if (!audioPlayer) return;
    audioPlayer.src = songs[currentSongIndex].src;
    if (currentSongText) {
        currentSongText.textContent = '正在播放：' + songs[currentSongIndex].title;
    }
}

document.addEventListener('DOMContentLoaded', initMusicPlayer);
