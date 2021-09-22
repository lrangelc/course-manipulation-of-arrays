const { searchCandidate, addCandidate, getValidSkills, checkIfIdExists } = require('./businessLogic');

const user1 = {
  id: 'ae588a6b-4540-5714-bfe2-a5c2a65f547a',
  name: 'Jimmy Coder',
  skills: ['javascript', 'es6', 'nodejs', 'express', 'cobol'],
};

const user2 = {
  id: 'ae588a6b-4540-5714-bfe2-a5c2a65f666a',
  name: 'Luis Rangel',
  skills: ['javascript', 'es6', 'nodejs', 'express', 'typescript'],
};

console.clear();
test('add user to db', () => {
  const candidates = [];
  const skillDB = [];

  addCandidate(candidates, skillDB, user1);
  expect(candidates).toEqual([user1]);
});

test('find candidate with skill that only one user match', () => {
  const candidates = [];
  const skillDB = [];

  addCandidate(candidates, skillDB, user1);
  addCandidate(candidates, skillDB, user2);

  expect(searchCandidate(candidates, skillDB, ['typescript'])).toBe(user2);
});

test('get skill exists', () => {
  const candidates = [];
  const skillDB = [];

  addCandidate(candidates, skillDB, user1);
  addCandidate(candidates, skillDB, user2);
  expect(getValidSkills(skillDB, ['typescript'])).toEqual(['typescript']);
});

test(`get array empty if skill doesn't exists`, () => {
  const candidates = [];
  const skillDB = [];

  addCandidate(candidates, skillDB, user1);
  addCandidate(candidates, skillDB, user2);
  expect(getValidSkills(skillDB, ['swift'])).toEqual([]);
});

test(`Add two user with diferent id`, () => {
  const candidates = [];
  const skillDB = [];

  expect(checkIfIdExists(candidates, user1.id)).toBe(false);
  addCandidate(candidates, skillDB, user1);
  expect(checkIfIdExists(candidates, user1.id)).toBe(true);
  expect(checkIfIdExists(candidates, user2.id)).toBe(false);
  addCandidate(candidates, skillDB, user2);
  expect(checkIfIdExists(candidates, user2.id)).toBe(true);
});
