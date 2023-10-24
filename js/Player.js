class Player {
    constructor(name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {
        if (this.isDead()) { 
            console.log(`${this.name} está muerto y no puede atacar!`);
            return; 
        }
    
        let damage = this.attack * diceValue;
        player.life -= damage;
        console.log(`${this.name} atacó a ${player.name} e hizo ${damage} daño!`);
    }
    

    isDead() {
        return this.life <= 0;
    }
}


let player1 = new Player("Jugador 1", 100, 10);
let player2 = new Player("Jugador 2", 100, 10);




player1.attackPlayer(player2, 6);


if (player2.isDead()) {
    console.log(`${player2.name} se murio :( )`);
} else {
    console.log(`${player2.name}  ${player2.life} sigue vivo :) `);
}




