const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/:tastetype', async(req, res) => {
  try{
    const tastetype = req.params.tastetype;
    if (tastetype == 'Sweet' || tastetype == 'Spicy' || tastetype == 'Sour') {
      const response = await MenuItem.find({taste: tastetype});
      console.log("response fetched");
      res.status(200).json(response);
      
    } else {
      res.status(404).json({error: 'Invalid work type'})
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
})
// comment added for testing purposes
module.exports = router;
