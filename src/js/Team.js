const randomId = require("random-id");

/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * @property characters - массив персонажей
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
export default class Team {
  // TODO: write your logic here
  constructor(characters) {
    this._characters = new Map();
    if (characters) {
      characters.forEach((character) => {
        this._characters.set(randomId(5), character);
      });
    }
  }

  get characters() {
    return [...this._characters.values()];
  }

  set characters(arr) {
    this._characters.clear();
    [...arr].forEach((character) => {
      this._characters.set(randomId(5), character);
    });
  }

  add(...characters) {
    characters.forEach((character) => {
      this._characters.set(randomId(5), character);
    });
  }

  has(character) {
    function isEqual(object1, object2) {
      const props1 = Object.getOwnPropertyNames(object1);
      const props2 = Object.getOwnPropertyNames(object2);

      if (props1.length !== props2.length) {
        return false;
      }

      for (let i = 0; i < props1.length; i += 1) {
        const prop = props1[i];
        const bothAreObjects =
          typeof object1[prop] === "object" &&
          typeof object2[prop] === "object";

        if (
          (!bothAreObjects && object1[prop] !== object2[prop]) ||
          (bothAreObjects && !isEqual(object1[prop], object2[prop]))
        ) {
          return false;
        }
      }

      return true;
    }

    return this.characters.some((char) => isEqual(char, character));
  }
}
