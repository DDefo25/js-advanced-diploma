import Team from "../Team";
import Bowman from "../characters/Bowman";

test("new Team(arr)", () => {
  const char1 = new Bowman();
  const char2 = new Bowman();
  const expectings = [char1, char2];
  const result = new Team( 'user', [char1, char2]);
  expect(result.characters).toEqual(expectings);
});

test('.has Team', () => {
  const char1 = new Bowman();
  const team = new Team( 'user', [char1, new Bowman()]);
  expect(team.has(char1)).toBe(true);
})