import Bowman from '../characters/Bowman';
import { characterGenerator, generateTeam } from '../generators';

test('characterGenerate', () => {
  const playerGenerator = characterGenerator([Bowman], 1);
  const expectings = {
    level: 1, attack: 25, defence: 25, health: 50, type: 'bowman', attackRange: 2, moveRange: 2, [Symbol.toStringTag]: 'Bowman',
  };
  expect(playerGenerator.next().value).toMatchObject(expectings);
});

test('generateTeam', () => {
  const result = generateTeam([Bowman], 1, 3);
  const expectings = [
    {
      level: 1, attack: 25, defence: 25, health: 50, type: 'bowman', attackRange: 2, moveRange: 2, [Symbol.toStringTag]: 'Bowman',
    },
    {
      level: 1, attack: 25, defence: 25, health: 50, type: 'bowman', attackRange: 2, moveRange: 2, [Symbol.toStringTag]: 'Bowman',
    },
    {
      level: 1, attack: 25, defence: 25, health: 50, type: 'bowman', attackRange: 2, moveRange: 2, [Symbol.toStringTag]: 'Bowman',
    },
  ];
  expect(result.characters).toMatchObject(expectings);
});
