class BattleGame {
    constructor(dice, player, enemy) {
        this.dice = dice;
        this.player = player;
        this.enemy = enemy;
    }

    battle(attacker, defender) {
        let diceValue = this.dice.roll();
        attacker.attackPlayer(defender, diceValue);
    }
}
