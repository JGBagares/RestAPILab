const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send('List of all Employees');
})

router.post('/', (req, res, next)=>{
    res.send('Create new Employee');
})

router.get('/:id', (req, res, next)=>{
    res.send('Get a single Employee');
})

router.patch('/:id', (req, res, next)=>{
    res.send('Update a single Employee');
})

router.delete('/:id', (req, res, next)=>{
    res.send('Delete a single Employee');
})


module.exports = router;