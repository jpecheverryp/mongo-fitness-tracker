const router = require("express").Router();
const db = require("../models")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workoutData) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(workoutData);
    });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body, (err, workoutData) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(workoutData);
    })
});


module.exports = router;