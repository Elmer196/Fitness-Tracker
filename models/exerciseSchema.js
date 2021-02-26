const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    reps: Number,
    sets: Number,
    weight: Number
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;