let text = document.getElementById("title");
const btn = document.getElementById("button2");
const hero = document.getElementById("hero");
const footer = document.getElementById("text");
const audio = document.getElementById("audio");
const mute = document.getElementById("mute");
const start = document.getElementById("start");


const quest = {
    text: "0%"
}

let checker = false;
let checkers = 0;

mute.onclick = () => {
    checkers++
    if (checker % 2 == 0) {
        mute.className = "fas fa-volume-mute";
    }
    audio.pause()
    mute.style.display = "none";
};

btn.addEventListener('click', function () {
    mute.style.display = "block";
    audio.play()
    btn.style.display = "none"
    anime({
        targets: '#title',
        opacity: 0,
        scale: 0.2,
        duration: 4000
    });
    hero.style.display = "block"
    anime({
        targets: '#hero',
        opacity: 1,
        scale: 4.5,
        duration: 5000,
        rotateZ: 360,
    })
    setTimeout(() => {
        anime({
            targets: '#text',
            opacity: {
                value: 1,
                duration: 1000,
                easing: 'easeInOutQuad',
            },
        })
    }, 5500);
    setTimeout(() => {

        footer.innerHTML = "(Нажмите на мономаха, чтобы начать разговор.)"
        checker = true
    }, 9000);
})
let clicked = false
hero.addEventListener("click", function () {
    if (clicked != true && checker == true) {
        clicked = true
        if (checker == true) {
            hero.src = "popa2.png"
            anime({
                targets: '#hero',
                scale: 4.5,
                duration: 0
            })
            anime({
                targets: quest,
                text: "OHH",
                round: 1,
                easing: 'linear',
                update: function () {
                    footer.innerHTML = quest.text;
                }
            })
            anime({
                targets: '#hero',
                translateX: -300,
                duration: 1000
            })
            function random() {
                anime({
                    targets: '#hero',
                    duration: 3000,
                    translateX: [-300, 300],
                    direction: 'alternate',
                    easing: 'linear',
                    loop: true,
                })
            }
            setTimeout(() => {
                random()
            }, 1000);

        }
    }
})
window.onload = () => {
    anime({
        targets: quest,
        text: "100%",
        round: 1,
        easing: 'linear',
        duration: 3000,
        update: function () {
            start.innerHTML = quest.text;
        }
    })
    setTimeout(() => {
        anime({
            targets: "#start",
            opacity: 0,
            duration: 1000,
            easing: 'linear',
        })
    }, 3200);
    setTimeout(() => {
        anime({
            targets: "#start",
            opacity: 1,
            duration: 2000,
            easing: 'linear',
        })
        start.innerHTML = "Вы готовы?"
    }, 4600);
    setTimeout(() => {
        anime({
            targets: "#start",
            opacity: 0,
            duration: 1000,
            easing: 'linear',
        })
    }, 6600);
    setTimeout(() => {
        btn.style.display = "block"
        start.innerHTML = "Начало начал"
        anime({
            targets: "#start",
            opacity: 1,
            duration: 1000,
            easing: 'linear',
        })
    }, 8000);
    setTimeout(() => {
        anime({
            targets: "#button2",
            opacity: 1,
            duration: 3000,
            easing: 'linear',
        })
    }, 10000);
}
