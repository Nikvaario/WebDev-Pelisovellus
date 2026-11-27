// TODO: Tämä tiedosto menee Luokat kansioon, kun sellainen luodaan

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