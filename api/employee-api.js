// Inject Modules
const express = require('express');
const userCtrl = require('../controllers/users/users');

const router = express.Router();

router.post('/insert',userCtrl.add);
router.get('/fetchAll',userCtrl.get);



module.exports = router;
