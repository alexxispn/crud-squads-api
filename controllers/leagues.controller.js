const LeagueModel = require('../models/league.model');
const cuid = require('cuid');

const getAllLeagues = async (req, res) => {
    try {
        const leagues = await LeagueModel.find();
        console.log(leagues);
        res.status(200).json({
            status: 'success',
            results: leagues.length,
            data: {
                leagues
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

const getLeague = async (req, res) => {
    try {
        const league = await LeagueModel.findOne({ id: req.params.id });
        res.status(200).json({
            status: 'success',
            data: {
                league
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

const createLeague = async (req, res) => {
    try {
        const league = req.body;
        league.id = cuid();
        const newLeague = await LeagueModel.create(league);
        res.status(201).json({
            status: 'success',
            data: {
                league: newLeague
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const updateLeague = async (req, res) => {
    try {
        const league = await LeagueModel.findOneAndUpdate( { id: req.params.id }, req.body);
        res.status(200).json({
            status: 'success',
            data: {
                league
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const deleteLeague = async (req, res) => {
    try {
        await LeagueModel.findOneAndDelete( { id: req.params.id });
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
    getAllLeagues,
    getLeague,
    createLeague,
    updateLeague,
    deleteLeague
}
