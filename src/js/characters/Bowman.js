import CharMath from './CharMath';

export default class Bowman extends CharMath {
  constructor(level, health, id) {
    super(level, id, 25, 25);
    this.type = 'bowman';
    this.attackRange = 2;
    this.moveRange = 2;

    if (health) {
      this.health = health;
    }
  }

  [Symbol.toStringTag] = 'Bowman';
}
