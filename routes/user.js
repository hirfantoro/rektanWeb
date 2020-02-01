const express = require('express');
const router = express.Router();


//@route get api/users
router.get('/',(req,res)=> res.send('test user route'));
module.exports = router;