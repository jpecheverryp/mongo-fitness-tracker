const router = require("express").Router();
const db = require("../models")
const Workout = require("../models")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, workoutData) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(workoutData);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
        .sort({ day: -1 })
        .limit(7)
        .sort({ day: 1 })
        .then(workoutData => {
            res.status(200).json(workoutData);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body} })
        .then(workoutData => {
            res.status(200).json(workoutData)
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

router.post("/api/workouts", (req, res) => {
    const newWorkout = new db.Workout({});
    newWorkout.save((err) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(newWorkout);
    })
});


module.exports = router;