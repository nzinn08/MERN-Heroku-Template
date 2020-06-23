const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/examples.server.controller.js')

router.get('/', exampleController.hello);
  
module.exports = router;