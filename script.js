/* ================= OPEN WEBSITE ================= */

function openWebsite() {

    document.getElementById("opening").style.display = "none";

    document.getElementById("mainContent").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createConfetti();
}


/* ================= MUSIC ================= */

const songs = [

    {
        title: "CHANGE UP",
        artist: "SEVENTEEN",
        file: "music/change-up.mp3"
    },

    {
        title: "Smile Flower",
        artist: "SEVENTEEN",
        file: "music/smile-flower.mp3"
    },

    {
        title: "PINOCCHIO (feat. So!YoON!)",
        artist: "HxW, So!YoON!",
        file: "music/pinocchio.mp3"
    },

    {
        title: "Baby, Honey",
        artist: "HOSHI",
        file: "music/baby-honey.mp3"
    },

    {
        title: "Cheers to youth",
        artist: "Vocal Team — SEVENTEEN",
        file: "music/cheers-to-youth.mp3"
    },

    {
        title: "Water",
        artist: "HipHop Team — SEVENTEEN",
        file: "music/water.mp3"
    },

    {
        title: "I Don't Understand But I Luv U",
        artist: "Performance Team — SEVENTEEN",
        file: "music/i-dont-understand.mp3"
    }

];


let currentSong = 0;

const audio = document.getElementById("audioPlayer");

const nowPlaying =
    document.getElementById("nowPlaying");

const artist =
    document.getElementById("artist");

const playButton =
    document.getElementById("playButton");


function playSong(index) {

    currentSong = index;

    const song = songs[currentSong];

    audio.src = song.file;

    nowPlaying.textContent = song.title;

    artist.textContent = song.artist;

    audio.play()
        .then(() => {
            playButton.textContent = "⏸";
        })
        .catch(() => {
            alert(
                "Audio belum ditemukan. Pastikan file lagu ada di folder music."
            );
        });
}


function toggleMusic() {

    if (!audio.src) {

        playSong(0);

        return;
    }

    if (audio.paused) {

        audio.play();

        playButton.textContent = "⏸";

    } else {

        audio.pause();

        playButton.textContent = "▶";
    }
}


function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    playSong(currentSong);
}


function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    playSong(currentSong);
}


audio.addEventListener("ended", function() {

    nextSong();

});


/* ================= GIFT ================= */

function openGift() {

    const gift =
        document.getElementById("giftMessage");

    gift.style.display = "block";

    createConfetti();

    gift.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* ================= CONFETTI ================= */

function createConfetti() {

    const symbols = [
        "💜",
        "✨",
        "💗",
        "🐯",
        "♡"
    ];

    for (let i = 0; i < 35; i++) {

        const confetti =
            document.createElement("div");

        confetti.textContent =
            symbols[Math.floor(
                Math.random() * symbols.length
            )];

        confetti.style.position = "fixed";
        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";

        confetti.style.zIndex = "100";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const animation =
            confetti.animate(

                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh) rotate(720deg)`,
                        opacity: 0
                    }
                ],

                {
                    duration:
                        Math.random() * 2500 + 2500,

                    easing: "linear"
                }
            );


        animation.onfinish = () => {
            confetti.remove();
        };

    }

}