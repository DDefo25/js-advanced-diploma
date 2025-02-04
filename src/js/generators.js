import Team from './Team';
/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    // const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    const level = Math.ceil(Math.random() * maxLevel);
    const characterName = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    yield new characterName(level);
  }
}

/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей.
 * Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount, teamName) {
  let count = 0;
  const playerGenerator = characterGenerator(allowedTypes, maxLevel);
  const team = new Team(teamName);
  while (count < characterCount) {
    count += 1;
    team.add(playerGenerator.next().value);
  }
  return team;
}
