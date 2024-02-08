const express = require('express');
const router = express.Router();
const mongoDB = require('../db'); 
const User = require('../Schemamodels/user');

router.post('/userPoem', async (req, res) => {
  try {
    // // Assuming req.body contains the data you want to save
    // const { poemTitle, poemBody, authorName } = req.body;

    // Creating a new user with the provided data
    // const newUser = await User.create({
    //   poemTitle,
    //   poemBody,
    //   authorName
    // });
    await mongoDB();
    console.log('DP');
    await User.create({
        poemTitle:req.body.poemTitle,
        poemBody:req.body.poemBody,
        authorName:req.body.authorName
    })



   res.status(201).json({ message: 'User created successfully'});
   ////res.status(201).json({ message: 'User created successfully',});
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' ,fullError: error.message });
  }
});

module.exports = router;
