console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("assets/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: " Bella",
    filePath: "assets/1.mp3",
    coversPath: "covers/0.jpg",
  },
  {
    songName: " Alone",
    filePath: "assets/2.mp3",
    coversPath: "covers/2.jpg",
  },
  {
    songName: " Faded",
    filePath: "assets/3.mp3",
    coversPath: "covers/3.jpg",
  },
  {
    songName: " Kid Lori",
    filePath: "assets/4.mp3",
    coversPath: "covers/4.jpg",
  },
  {
    songName: " Love u",
    filePath: "assets/5.mp3",
    coversPath: "covers/5.jpg",
  },
  {
    songName: " Billian billian",
    filePath: "assets/6.mp3",
    coversPath: "covers/6.jpg",
  },
  {
    songName: " Made in India",
    filePath: "assets/7.mp3",
    coversPath: "covers/7.jpeg",
  },
  {
    songName: " Kya Baat Hai",
    filePath: "assets/8.mp3",
    coversPath: "covers/8.jpg",
  },
  {
    songName: " Hookah",
    filePath: "assets/9.mp3",
    coversPath: "covers/9.jpg",
  },
  {
    songName: " Ishare Tere",
    filePath: "assets/10.mp3",
    coversPath: "covers/10.jpg",
  },
  {
    songName: " Sanam re",
    filePath: "assets/11.mp3",
    coversPath: "covers/11.jpeg",
  },
  {
    songName: " Tera Hua",
    filePath: "assets/12.mp3",
    coversPath: "covers/12.jpg",
  },
  {
    songName: " Dill Diya Gallan",
    filePath: "assets/13.mp3",
    coversPath: "covers/13.jpg",
  },
  {
    songName: " Rafta Rafta",
    filePath: "assets/14.mp3",
    coversPath: "covers/14.jpg",
  },
  {
    songName: " Baarish",
    filePath: "assets/15.mp3",
    coversPath: "covers/15.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coversPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handle play.pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `assets/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `assets/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex >= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `assets/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

window.addEventListener("load", () => {
  // Animate the navbar
  gsap.from("nav", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });

  // Animate the song list containers
  gsap.from(".container", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2, // Stagger animation for multiple containers
  });

  // Animate individual song items
  gsap.from(".songItem", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.1, // Stagger animation for song items
    delay: 0.5,
  });

  // Animate the bottom player controls
  gsap.from(".bottom", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
  });
});
