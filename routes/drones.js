const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
    try {
      const drones = await Drone.find();
      res.render('drones/drones-list', { drones});
    } catch (err) {
      console.error(error);
    }
})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    res.render('drones/drones-create');
})

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
    try {
      const { name, propellers, maxSpeed } = req.body;
      await Drone.create({
        name,
        propellers,
        maxSpeed
      })
      res.redirect("/drones");
    } catch (err) {
      console.error(error);
    }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
