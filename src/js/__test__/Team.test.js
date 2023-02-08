import Team from "../Team";
import Bowman from "../characters/Bowman";

test("new Team(arr)", () => {
  const expectings = [new Bowman(), new Bowman()];
  const char1 = new Bowman();
  const char2 = new Bowman();
  const result = new Team([char1, char2]);
  expect(result.characters).toEqual(expectings);
});

test.each([
  [new Bowman(2, 50), true],
  [new Bowman(1, 10), false],
])("Team.has(%s) return %i", (character, expecting) => {
  const team = new Team([new Bowman(2, 50), new Bowman(1, 1)]);
  expect(team.has(character)).toEqual(expecting);
});
