const router = require('express').Router();
const playersController = require('../controllers/players.controller');

router.get('/', playersController.getAllPlayers);
router.post('/', playersController.createPlayer);
router.get('/:id', playersController.getPlayer);
router.put('/:id', playersController.updatePlayer);
router.delete('/:id', playersController.deletePlayer);

module.exports = router;
