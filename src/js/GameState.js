import Bowman from "./characters/Bowman";
import Swordsman from "./characters/Swordsman";
import Magician from "./characters/Magician";
import Daemon from "./characters/Daemon";
import Undead from "./characters/Undead";
import Vampire from "./characters/Vampire";
import PositionedCharacter from "./PositionedCharacter";

export default class GameState {
  constructor(
    maxPoints = 0,
    focusedCell,
    charactersPositions = [],
    points = 0,
    focusedCharacter,
    theme
  ) {
    this.maxPoints = maxPoints;
    this.focusedCell = focusedCell;
    this.charactersPositions = charactersPositions;
    this.points = points;
    this.focusedCharacter = focusedCharacter;
    this.playerTypes = [Bowman, Swordsman, Magician];
    this.enemyTypes = [Daemon, Undead, Vampire, Bowman];
    this.theme = theme;
  }

  static toJSON(obj) {
    if (!(obj instanceof GameState)) {
      throw new Error("Передан некорректный GameState");
    }

    function getClassName(obj) {
      return {
        obj,
        className: obj[Symbol.toStringTag],
      };
    }
    const charactersPositionsToJSON = [];
    if (obj.charactersPositions.length !== 0) {
      obj.charactersPositions.forEach((el) => {
        charactersPositionsToJSON.push({
          character: getClassName(el.character),
          position: el.position,
          team: el.team,
        });
      });
    }

    const gameStateIsJSON = {
      maxPoints: obj.maxPoints,
      focusedCell: obj.focusedCell,
      points: obj.points,
      theme: obj.theme,
      charactersPositionsToJSON,
      focusedCharacterToJSON:
        obj.focusedCharacter !== undefined && obj.focusedCharacter !== null
          ? {
              characterToJSON: getClassName(obj.focusedCharacter.character),
              position: obj.focusedCharacter.position,
              positionXY: obj.focusedCharacter.positionXY,
              posibleMoves: obj.focusedCharacter.posibleMoves,
              posibleAttacks: obj.focusedCharacter.posibleAttacks,
              team: obj.focusedCharacter.team,
            }
          : obj.focusedCharacter,
    };
    return gameStateIsJSON;
  }

  static from(object) {
    function createClass(obj) {
      switch (obj.className) {
        case 'Bowman': 
        return new Bowman(obj.obj.level, obj.obj.health, obj.obj.id);
        case 'Swordsman': 
        return new Swordsman(obj.obj.level, obj.obj.health, obj.obj.id);
        case 'Magician': 
        return new Magician(obj.obj.level, obj.obj.health, obj.obj.id);
        case 'Daemon': 
        return new Daemon(obj.obj.level, obj.obj.health, obj.obj.id);
        case 'Vampire': 
        return new Vampire(obj.obj.level, obj.obj.health, obj.obj.id);
        case 'Undead': 
        return new Undead(obj.obj.level, obj.obj.health, obj.obj.id);
      }
    }

    const charactersPositionsFromJSON = [];
    object.charactersPositionsToJSON.forEach((el) => {
      charactersPositionsFromJSON.push(
        new PositionedCharacter(createClass(el.character), el.position, el.team)
      )
    }
    );
    const focusedCharacterFromJSON =
      object.focusedCharacterToJSON !== undefined
        ? {
            character: createClass(
              object.focusedCharacterToJSON.characterToJSON
            ),
            position: object.focusedCharacterToJSON.position,
            positionXY: object.focusedCharacterToJSON.positionXY,
            posibleMoves: object.focusedCharacterToJSON.posibleMoves,
            posibleAttacks: object.focusedCharacterToJSON.posibleAttacks,
            team: object.focusedCharacterToJSON.team,
          }
        : undefined;
    
        const focusCell = object.focusedCell ? object.focusedCell : undefined;
    

    return new GameState(
      object.maxPoints,
      focusCell,
      charactersPositionsFromJSON,
      object.points,
      focusedCharacterFromJSON,
      object.theme
    );
  }
}
