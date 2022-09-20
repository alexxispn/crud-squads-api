const express = require('express');
const leaguesRouter = require('./routes/leagues.router');
const teamsRouter = require('./routes/teams.router');
const playersRouter = require('./routes/players.router');

const app = express();

app.use(express.json());

app.use('/leagues', leaguesRouter);
app.use('/teams', teamsRouter);
app.use('/players', playersRouter);

module.exports = app;
