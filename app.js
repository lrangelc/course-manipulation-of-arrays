'use strict';

const express = require('express');
const { searchCandidate, addCandidate, getValidSkills, checkIfIdExists } = require('./businessLogic');
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

  if (checkIfIdExists(candidates, req.body.id)) {
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
  const candidate = req.body;

  addCandidate(candidates, skillDB, candidate);

  res.sendStatus(200);
});

app.get('/candidates/search', validateGet, function (req, res) {
  if (candidates.length == 0) {
    return res.status(404).send('Candidates are defined');
  }
  const skills = req.query['skills'].split(',');

  const validSkills = getValidSkills(skillDB, skills);

  if (validSkills.length == 0) {
    return res.status(404).send('Invalid skill list');
  }

  const bestCandidate = searchCandidate(candidates, skillDB, validSkills);

  res.send(bestCandidate);
});

app.listen(process.env.HTTP_PORT || 3000);
