const express = require("express")
const router = express.Router()
const Cars = require("../models/cars.js")

//GET
router.get("/", (req, res) => {
  Cars.find({}, (error, foundCars) => {
    res.json(foundCars)
  })
})

//DELETE
router.delete("/:id", (req, res) => {
  Cars.findByIdAndRemove(req.params.id, (error, deletedCars) => {
    res.json(deletedCars)
  })
})

//POST
router.post("/", (req, res) => {
  Cars.create(req.body, (error, createdCars) => {
    res.json(createdCars)
  })
})

//PUT(UPDATE)
router.put("/:id", (req, res) => {
  Cars.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error, updatedCars) => {
      res.json(updatedCars)
    })
})

module.exports = router
