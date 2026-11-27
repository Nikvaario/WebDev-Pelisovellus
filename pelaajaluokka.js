// Luodaan pelaaja luokka, jossa annetaan ominaisuudet pelaajalle
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 100;
        this.height = 100;
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.cravity = 1
    }
    // metodi jolla luodaan pelaajan ulkonäkö
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
// Päivittää pelaajan sijaintia
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        // pohjan päällä/yläpuolella
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.cravity
        } else this.velocity.y = 0

    }
}