const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, 'El nombre del jugador es obligatorio'],
        trim: true,
        maxlength: [50, 'El nombre del jugador no puede tener más de 50 caracteres'],
        minlength: [4, 'El nombre del jugador no puede tener menos de 4 caracteres'],
    },
    "id": {
        type: String,
        required: [true, 'El identificador del jugador es obligatorio'],
        unique: true,
    },
    "photo": {
        type: String,
        required: [true, 'La foto del jugador es obligatoria'],
        unique: true
    },
    "team": {
        type: String,
        required: [true, 'El equipo del jugador es obligatorio']
    }
});

const PlayerModel = mongoose.model('Player', playerSchema);
module.exports = PlayerModel;
