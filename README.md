# Battle of bridge

Este es un juego de batalla simple que incluye la lógica de jugador, dado y el juego en sí. Aquí se detallan las clases y métodos necesarios para el juego.

## Clase Player

La clase `Player` representa a un jugador y tiene los siguientes atributos:

- `name`: el nombre del jugador.
- `life`: la vida del jugador.
- `attack`: el valor de ataque del jugador.

Además, incluye los siguientes métodos:

- `attackPlayer(player, diceValue)`: este método recibe un jugador como objetivo y un valor del dado para realizar un ataque al jugador objetivo.
- `isDead()`: este método devuelve `true` si el jugador está muerto, es decir, si su vida es igual o menor que cero.

## Clase Dice

La clase `Dice` representa un dado y tiene un solo atributo:

- `value`: el valor actual del dado.

La clase incluye el siguiente método:

- `roll()`: este método genera un valor aleatorio entre 1 y 6 y lo guarda en el atributo `value`.

## Clase BattleGame

La clase `BattleGame` es la encargada de gestionar el juego en sí y tiene los siguientes atributos:

- `dice`: una instancia de la clase `Dice` para lanzar dados.
- `player`: una instancia de la clase `Player` que representa al jugador.
- `enemy`: una instancia de la clase `Player` que representa al enemigo.

La clase incluye los siguientes métodos:

- `battle(attacker, defender)`: este método recibe un atacante y un defensor como parámetros y hace que el atacante ataque al defensor. Esto implica usar el dado para determinar el valor del ataque y reducir la vida del defensor en consecuencia.
- `isGameOver()`: este método devuelve `true` si el jugador o el enemigo están muertos, lo que significa que el juego ha terminado.

Asegúrate de implementar estas clases y métodos en tu juego para que funcione correctamente.

¡Diviértete jugando tu juego de batalla!
