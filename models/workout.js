const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: {
        type: {
            type: String,
            trim: true,
            required: "Enter exercisse type",
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name",
        },
        duration: {
            type: Number,
            required: "Enter duration",
        },
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;