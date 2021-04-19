const router = require("express").Router();
const db = require("../models")
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workoutData) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(workoutData);
    });
})

module.exports = router;