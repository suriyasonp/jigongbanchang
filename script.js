document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('temple-music');
    const playPauseButton = document.getElementById('play-pause');
    const seekBar = document.getElementById('seek-bar');
    const volumeControl = document.getElementById('volume-control');
    const volumeIcon = document.getElementById('volume-icon');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    function updateSeekBar() {
        seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
        currentTimeElement.textContent = formatTime(audio.currentTime);
    }

    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    seekBar.addEventListener('input', function () {
        const time = (seekBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });

    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value / 100;
        updateVolumeIcon();
    });

    audio.addEventListener('loadedmetadata', function () {
        durationElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', updateSeekBar);

    function updateVolumeIcon() {
        if (audio.volume > 0.5) {
            volumeIcon.className = 'fas fa-volume-up';
        } else if (audio.volume > 0) {
            volumeIcon.className = 'fas fa-volume-down';
        } else {
            volumeIcon.className = 'fas fa-volume-mute';
        }
    }

    volumeIcon.addEventListener('click', function () {
        if (audio.volume > 0) {
            audio.volume = 0;
            volumeControl.value = 0;
        } else {
            audio.volume = 1;
            volumeControl.value = 100;
        }
        updateVolumeIcon();
    });
});