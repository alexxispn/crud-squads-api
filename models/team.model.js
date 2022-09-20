const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, 'El nombre del equipo es obligatorio'],
        unique: true,
        trim: true,
        maxlength: [40, 'El nombre del equipo no puede tener más de 40 caracteres'],
        minlength: [4, 'El nombre del equipo no puede tener menos de 4 caracteres'],
    },
    "id": {
        type: String,
        required: [true, 'El identificador del equipo es obligatorio'],
        unique: true,
    },
    "logo": {
        type: String,
        required: [true, 'El logo del equipo es obligatorio'],
        unique: true
    },
    "league": {
        type: String,
        required: [true, 'La liga del equipo es obligatoria']
    }
});

const TeamModel = mongoose.model('Team', teamSchema);
module.exports = TeamModel;
