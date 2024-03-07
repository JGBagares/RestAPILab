const express = require('express');
const router = express.Router();

router.get('/', (res, req, next)=>{
    res.send('List products');
})

router.post('/', (res, req, next)=>{
    res.send('create product');
})



module.exports=router;