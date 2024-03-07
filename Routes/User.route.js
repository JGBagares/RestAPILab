const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send('List of all users');
})

router.post('/', (req, res, next)=>{
    res.send('Create new user');
})

router.get('/:id', (req, res, next)=>{
    res.send('Get a user');
})

router.patch('/:id', (req, res, next)=>{
    res.send('Update user info');
})




module.exports = router;