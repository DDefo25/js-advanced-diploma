import CharMath from './CharMath';

export default class Undead extends CharMath {
  constructor(level, health, id) {
    super(level, id, 40, 10);
    this.type = 'undead';
    this.attackRange = 1;
    this.moveRange = 4;

    if (health) {
      this.health = health;
    }
  }

  [Symbol.toStringTag] = 'Undead';
}
