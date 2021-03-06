const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    get all items
// @access  Public

router.get("/", (req, res) => {
  Item.find() // The Item model
    .sort({ date: -1 }) // 1 for ASCE & -1 for DESC
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create an item
// @access  Public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => {
    console.log("item added successfuly...");
    res.json(item);
  });
});

// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  Public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(error => res.status(404).json({ success: false }));
});

module.exports = router;
