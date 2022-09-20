const TeamModel = require('../models/team.model');
const cuid = require('cuid');

const getAllTeams = async (req, res) => {
    try {
        const teams = await TeamModel.find();
        res.status(200).json({
            status: 'success',
            results: teams.length,
            data: {
                teams
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

const getTeam = async (req, res) => {
    try {
        const team = await TeamModel.findOne( { id: req.params.id });
        res.status(200).json({
            status: 'success',
            data: {
                team
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

const createTeam = async (req, res) => {
    try {
        const team = req.body;
        team.id = cuid();
        const newTeam = await TeamModel.create(team);
        res.status(201).json({
            status: 'success',
            data: {
                team: newTeam
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

const updateTeam = async (req, res) => {
    try {
        const team = await TeamModel.findOneAndUpdate( { id: req.params.id }, req.body);
        res.status(200).json({
            status: 'success',
            data: {
                team
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

const deleteTeam = async (req, res) => {
    try {
        await TeamModel.findOneAndDelete( { id: req.params.id });
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
    getAllTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam
}
