// Draws a 16:9 ratio canvas to screen based on the size of a single tile
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const tileSize = 64;
// tileSize = palikkakoko
canvas.width = tileSize * 16;
canvas.height = tileSize * 9

const level1Background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './Assets/backgroundLevel1.png'
})

//Luodaan uusi pelaaja
const player = new Player()

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

//animaatio looppi
//let bottom = y + 100;
function animate() {
    window.requestAnimationFrame(animate)
    level1Background.draw();

    // Pelaajan nopeus
    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5

    // kutsuu metodeja, jotka löytyy pelaajaluokasta
    player.draw()
    player.update()
}

animate()