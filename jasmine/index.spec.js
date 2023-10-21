describe("Player", () => {
  let player;
  let enemy;

  beforeEach(() => {
    player = new Player("Player", 100, 10);
    enemy = new Player("Enemy", 100, 5);
  });

  it("La class tiene que tener estas propriedades: name, life y attack", () => {
    expect(player.name).toBe("Player");
    expect(player.life).toBe(100);
    expect(player.attack).toBe(10);
  });

  it("El player tiene que poder atacar a otro player", () => {
    const initialEnemyLife = enemy.life;
    const diceValue = 3; // You can set a specific value for testing

    player.attackPlayer(enemy, diceValue);

    // The enemy's life should be reduced by (player's attack * diceValue)
    const expectedDamage = player.attack * diceValue;
    expect(enemy.life).toBe(initialEnemyLife - expectedDamage);
  });

  it("Se tiene que manejar la muerte del player si la vida esta en 0", () => {
    player.life = 0; // Simulate the player being dead
    const initialEnemyLife = enemy.life;
    const diceValue = 3;

    player.attackPlayer(enemy, diceValue);

    console.log(player, enemy)

    // Even if the player is dead, the enemy's life should not be affected
    expect(enemy.life).toBe(initialEnemyLife);
  });

  it("El metodo isDead debería devolver true si el player tiene 0 de vida", () => {
    player.life = 0;
    expect(player.isDead()).toBe(true);

    player.life = 10;
    expect(player.isDead()).toBe(false);
  });
});

describe('Dice', function() {
  let dice;

  beforeEach(function() {
    dice = new Dice();
  });

  it('al tirar el dado el valor de la clase tiene que actualizarse', function() {
    dice.roll();
    expect(dice.value).toBeGreaterThanOrEqual(1);
    expect(dice.value).toBeLessThanOrEqual(6);
  });
});

describe('BattleGame', function() {
  let dice, player, enemy, battleGame;

  beforeEach(function() {
    // Configura objetos de prueba antes de cada prueba.
    dice = jasmine.createSpyObj('dice', ['roll']);
    player = jasmine.createSpyObj('player', ['attackPlayer']);
    enemy = jasmine.createSpyObj('enemy', ['attackPlayer']);

    battleGame = new BattleGame(dice, player, enemy);
  });

  it('debe inicializarse con los dados, el jugador y el enemigo proporcionados', function() {
    expect(battleGame.dice).toBe(dice);
    expect(battleGame.player).toBe(player);
    expect(battleGame.enemy).toBe(enemy);
  });

  it('debe tirar los dados y llamar a attacker.attackPlayer', function() {
    // Arrange
    const attacker = battleGame.player;
    const defender = battleGame.enemy;
    dice.roll.and.returnValue(4);

    // Act
    battleGame.battle(attacker, defender);

    // Assert
    expect(dice.roll).toHaveBeenCalled();
    expect(attacker.attackPlayer).toHaveBeenCalled();
  });
});
