class BattleGame {
  constructor(dice, player, enemy) {
    this.dice = dice;
    this.player = player;
    this.enemy = enemy;
  }

  battle(player, enemy) {
    player.attackPlayer(enemy, this.dice.roll());
  }
}
