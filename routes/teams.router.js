const router = require('express').Router();
const teamsController = require('../controllers/teams.controller');

router.get('/', teamsController.getAllTeams);
router.post('/', teamsController.createTeam);
router.get('/:id', teamsController.getTeam);
router.put('/:id', teamsController.updateTeam);
router.delete('/:id', teamsController.deleteTeam);

module.exports = router;
