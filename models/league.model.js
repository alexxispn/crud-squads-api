const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, 'El nombre de la liga es obligatorio'],
        unique: true,
        trim: true,
        maxlength: [40, 'El nombre de la liga no puede tener más de 40 caracteres'],
        minlength: [3, 'El nombre de la liga no puede tener menos de 3 caracteres'],
    },
    "id": {
        type: String,
        required: [true, 'El identificador de la liga es obligatorio'],
        unique: true,
    },
    "logo": {
        type: String,
        required: [true, 'El logo de la liga es obligatorio'],
        unique: true
    }
});

const LeagueModel = mongoose.model('League', leagueSchema);
module.exports = LeagueModel;
