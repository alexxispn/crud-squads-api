const router = require('express').Router();
const leaguesController = require('../controllers/leagues.controller');

router.get('/', leaguesController.getAllLeagues);
router.post('/', leaguesController.createLeague);
router.get('/:id', leaguesController.getLeague);
router.put('/:id', leaguesController.updateLeague);
router.delete('/:id', leaguesController.deleteLeague);

module.exports = router;
