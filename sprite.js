// TODO: Tämä tiedosto menee Luokat kansioon, kun sellainen luodaan
// TODO: Seuraava koodipätkä html dokumenttiin: <script src ="sprite.js" defer></script>

class Sprite {
    constructor({position, imageSrc}) {
        this.position = position; // Kuvan ankkurisijainti
        this.image = new Image(); 
        this.image.onload = () => {
            this.loaded = true;
        }  
        this.image.src = imageSrc; // Kuvatiedosto
        this.loaded = false;
    }

    // Piirtää kuvan näytölle, mikäli kuvaan viitattu tiedosto on ladattu
    draw() {
        if (!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// TODO: Kopioidaan seuraava koodipätkä fiE.js tiedostoon player muuttujan yläpuolelle:

// Luodaan ensimmäisen tason taustakuva
const level1Background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './Assets/backgroundLevel1.png'
})

// TODO: Poistetaan Animate funktiosta c.fillstyle ja c.fillRect, ja korvataan se seuraavalla koodipätkällä:
level1Background.draw();