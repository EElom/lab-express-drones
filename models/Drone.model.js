// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema[{
  name: {
    type: String,
    required: true
  },
  propellers: {
    type: Number,
    required: true
  },
  maxSpeed: {
    type: Number,
    default: 0
  },
  
}]

const Drone = model('Drone', droneSchema);

module.exports = Drone;