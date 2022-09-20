const PlayerModel = require('../models/player.model');
const cuid = require('cuid');

const getAllPlayers = async (req, res) => {
    try {
        const players = await PlayerModel.find();
        res.status(200).json({
            status: 'success',
            results: players.length,
            data: {
                players
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

const getPlayer = async (req, res) => {
    try {
        const player = await PlayerModel.findOne( { id: req.params.id });
        res.status(200).json({
            status: 'success',
            data: {
                player
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

const createPlayer = async (req, res) => {
    try {
        const player = req.body;
        player.id = cuid();
        const newPlayer = await PlayerModel.create(player);
        res.status(201).json({
            status: 'success',
            data: {
                player: newPlayer
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const updatePlayer = async (req, res) => {
    try {
        const player = await PlayerModel.findOneAndUpdate( { id: req.params.id }, req.body);
        res.status(200).json({
            status: 'success',
            data: {
                player
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const deletePlayer = async (req, res) => {
    try {
        await PlayerModel.findOneAndDelete( { id: req.params.id });
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

module.exports = {
    getAllPlayers,
    getPlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
}
