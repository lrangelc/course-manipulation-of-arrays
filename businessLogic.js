function searchCandidate(candidates, skillDB, validSkill) {
  const candidatesSkill = {};
  validSkill.forEach((skill) => {
    if (skillDB[skill]) {
      skillDB[skill].forEach((candidate) => {
        if (!candidatesSkill[candidate]) {
          candidatesSkill[candidate] = 1;
        } else {
          candidatesSkill[candidate]++;
        }
      });
    }
  });

  const keys = Object.keys(candidatesSkill);

  let count = 0;
  let bestCandidate = undefined;

  keys.forEach((key) => {
    if (candidatesSkill[key] > count) {
      count = candidatesSkill[key];
      bestCandidate = candidates.filter((candidate) => candidate.id == key);
    }
  });

  return bestCandidate.length > 0 ? bestCandidate[0] : {};
}

function addCandidate(candidates, skillDB, candidate) {
  candidates.push(candidate);

  candidate.skills.map((skill) => {
    if (!skillDB[skill]) {
      skillDB[skill] = [];
    }
    skillDB[skill].push(candidate.id);
  });
}

function getValidSkills(skillDB, skills) {
  const validSkills = skills.filter((skill) => {
    if (skillDB[skill]) {
      return skill;
    }
  });
  return validSkills;
}

function checkIfIdExists(candidates, id) {
  const result = candidates.filter((candidate) => candidate.id == id);

  return result.length > 0;
}

module.exports = { searchCandidate, addCandidate, getValidSkills, checkIfIdExists };
