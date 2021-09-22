'use strict';

const express = require('express');
const app = express();
const candidates = [];
const skillDB = {};

app.use(express.json());

function validatePostForm(req, res, next) {
  if (!req.body.id) {
    return res.status(500).send('Need a id');
  }

  if (!req.body.name) {
    return res.status(500).send('Need a name');
  }

  if (!req.body.skills) {
    return res.status(500).send('Need a list of skills');
  }

  const result = candidates.filter((candidate) => candidate.id == req.body.id);

  if (result.length > 0) {
    return res.status(404).send('The candidate is already defined');
  }

  next();
}

function validateGet(req, res, next) {
  const statusCode = 404;

  if (!req.query['skills']) {
    return res.send(statusCode, 'Need a solution should never retrieve a candidate who knows nothing');
  }

  const skills = req.query['skills'].split(',');

  if (skills.length == 0) {
    return res.send(statusCode, 'Need a solution should never retrieve a candidate who knows nothing');
  }

  next();
}

app.post('/candidates', validatePostForm, function (req, res) {
  candidates.push(req.body);

  req.body.skills.map((skill) => {
    if (!skillDB[skill]) {
      skillDB[skill] = [];
    }
    skillDB[skill].push(req.body.id);
  });

  res.sendStatus(200);
});

app.get('/candidates/search', validateGet, function (req, res) {
  if (candidates.length == 0) {
    return res.status(404).send('Candidates are defined');
  }
  const skills = req.query['skills'].split(',');

  const validSkill = skills.filter((skill) => {
    if (skillDB[skill]) {
      return skill;
    }
  });

  if (validSkill.length == 0) {
    return res.status(404).send('Invalid skill list');
  }

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

  res.send(bestCandidate.length > 0 ? bestCandidate[0] : {});
});

app.listen(process.env.HTTP_PORT || 3000);
