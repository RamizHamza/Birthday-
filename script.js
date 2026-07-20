/* ==========================
   ELEMENTS
========================== */

const openBtn = document.getElementById("openBtn");
const birthday = document.getElementById("birthday");

const letterBtn = document.getElementById("letterBtn");
const letter = document.getElementById("letter");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("birthdayMusic");

/* ==========================
   OPEN SURPRISE
========================== */

openBtn.addEventListener("click", () => {

    birthday.classList.remove("hidden");

    birthday.scrollIntoView({

        behavior: "smooth"

    });

});

/* ==========================
   OPEN LETTER
========================== */

letterBtn.addEventListener("click", () => {

    letter.scrollIntoView({

        behavior: "smooth"

    });

});
/* ==========================
   MUSIC PLAYER
========================== */

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        isPlaying = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "▶️ Play Music";

        isPlaying = false;

    }

});

/* ==========================
   AUTO SCROLL TO FINAL
========================== */

const finalSection = document.getElementById("final");

window.addEventListener("scroll", () => {

    const position = window.scrollY;

    if (position > 1200) {

        finalSection.style.opacity = "1";

        finalSection.style.transform = "translateY(0)";

    }

});

/* ==========================
   PAGE LOADED
========================== */

window.onload = () => {

    document.body.style.opacity = "1";

    console.log("Birthday Website Loaded Successfully ❤️");

};

/* ==========================
   PART 11
========================== */

const images = document.querySelectorAll(".gallery-grid img");

images.forEach((img)=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("active");

    });

});

console.log("Part 11 Loaded Successfully ❤️");
/* ==========================
   PART 12 - HEARTS
========================== */

const hearts = document.createElement("div");

hearts.className = "hearts";

document.body.appendChild(hearts);

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💙";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);
/* ==========================
   PART 13
========================== */

function firework(x,y){

    const fw=document.createElement("div");

    fw.className="firework";

    fw.style.left=x+"px";

    fw.style.top=y+"px";

    document.body.appendChild(fw);

    setTimeout(()=>{

        fw.remove();

    },1000);

}

document.addEventListener("click",(e)=>{

    firework(e.clientX,e.clientY);

});

console.log("Part 13 Loaded ❤️");
/* ==========================
   PART 14
========================== */

const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click", () => {

    giftBox.classList.toggle("gift-open");

    birthday.classList.remove("hidden");

    birthday.scrollIntoView({

        behavior: "smooth"

    });

});
/* ==========================
   PART 15
========================== */

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

document.querySelectorAll(".gallery-grid img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src=img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});
/* ==========================
   PART 16 - CONFETTI
========================== */

function createConfetti(){

    const colors = [
        "#38bdf8",
        "#0ea5e9",
        "#60a5fa",
        "#93c5fd",
        "#ffffff"
    ];

    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDuration=
        (3+Math.random()*2)+"s";

        piece.style.width=
        (6+Math.random()*8)+"px";

        piece.style.height=
        piece.style.width;

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}

/* Confetti when Surprise opens */

openBtn.addEventListener("click",createConfetti);

/* Confetti when Gift opens */

if(typeof giftBox!=="undefined"){

    giftBox.addEventListener("click",createConfetti);

}
/* ==========================
   PART 17 - COUNTDOWN
========================== */

const targetDate = new Date("1 Jan, 2027 00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        document.getElementById("countdown").innerHTML = `
            <h2 class="section-title">
                🎉 Happy Birthday A to Z ❤️
            </h2>
        `;
        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();
/* ==========================
   PART 18 - BLOW CANDLE
========================== */

const blowBtn = document.getElementById("blowBtn");
const flame = document.querySelector(".flame");

blowBtn.addEventListener("click",()=>{

    flame.style.display="none";

    blowBtn.innerHTML="🎉 Wish Made!";

    createConfetti();

});
/* ==========================
   PART 19
========================== */

document.addEventListener("mousemove",(e)=>{

    document.documentElement.style.setProperty(
        "--mouse-x",
        e.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        e.clientY + "px"
    );

});

console.log("✨ Premium Aurora Loaded");
/* ==========================
   PART 20 - FINAL
========================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },1000);

    },1800);

});

/* Birthday Greeting */

setTimeout(()=>{

    alert("🎉 Happy Birthday A to Z ❤️\n\nMay Allah always keep you smiling and bless your life with happiness.\n\nMade with ❤️ by Ramiz Hamza");

},2500);

console.log("🎉 Birthday Website Version 1 Complete");