class BattleGame {
  constructor(dice, player, enemy) {
    this.dice = dice;
    this.player = player;
    this.enemy = enemy;
  }

  battle(attacker, defender) {
    attacker.attackPlayer();
    const diceValue = this.dice.roll();
    defender.life -= attacker.attack * diceValue;
  }
}
