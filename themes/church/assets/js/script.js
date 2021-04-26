/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($) {
    'use strict';

    // Place your code here.

    document.querySelectorAll('.player').forEach(function (e) {
        const pauseControl = e.querySelector('.player--pause');
        const seekControl = e.querySelector('.player--seek');
        const volumeControl = e.querySelector('.player--volume');
        const currentTime = e.querySelector('.player--currenttime');
        const endTime = e.querySelector('.player--duration');
        const nowPlaying = e.querySelector('.player--nowplaying');

        const audio = e.querySelector('audio');

        let raf = null;
        let playState = 'play';
        let cancelAnimation = null;
        let scrollValue = 0;

        const pad = (x) => x.toString().padStart(2, '0');

        const calculateTime = (secs) => {
            const hours = Math.floor(secs / 60 / 60);
            const minutes = Math.floor(secs / 60);
            const seconds = Math.floor(secs % 60);
            return `${hours > 0 ? `${pad(hours)}:` : ''}${pad(minutes)}:${pad(seconds)}`;
        };

        const whilePlaying = () => {
            seekControl.value = Math.floor(audio.currentTime);
            currentTime.textContent = calculateTime(seekControl.value);
            raf = requestAnimationFrame(whilePlaying);
        };

        const setDuration = () => {
            seekControl.max = Math.floor(audio.duration);
            console.log(audio.duration);
            endTime.textContent = calculateTime(audio.duration);
        };

        seekControl.addEventListener('input', () => {
            currentTime.textContent = calculateTime(seekControl.value);
            if(!audio.paused) {
                cancelAnimationFrame(raf);
            }
        });

        seekControl.addEventListener('change', () => {
            audio.currentTime = seekControl.value;
            if(!audio.paused) {
                requestAnimationFrame(whilePlaying);
            }
        });

        volumeControl.addEventListener('input', (e) => {
            const value = e.target.value;
            audio.volume = value / 100;
        });

        pauseControl.addEventListener('click', () => {
            if(playState === 'play') {
                pauseControl.classList.add('pause');
                audio.play();
                requestAnimationFrame(whilePlaying);
                playState = 'pause';
            } else {
                pauseControl.classList.remove('pause');
                audio.pause();
                cancelAnimationFrame(raf);
                playState = 'play';
            }
        });

        audio.addEventListener('loadedmetadata', () => {
            setDuration();
        });


        const animateNowPlaying = () => {
            if (scrollValue < nowPlaying.scrollHeight) {
                scrollValue += 0.15;

                nowPlaying.scrollTop = scrollValue

                requestAnimationFrame(animateNowPlaying);
            } else {
                // Start over
                nowPlaying.style.color = `rgba(22, 236, 20, 0)`;

                setTimeout(() => {
                    nowPlaying.style.color = `rgba(22, 236, 20, 1)`;
                    scrollValue = 0;
                    nowPlaying.scrollTop = 0;
                    setTimeout(animateNowPlaying, 6000)
                }, 2000);
            }

        };

        setTimeout(animateNowPlaying, 2000);
    });
})(u);
