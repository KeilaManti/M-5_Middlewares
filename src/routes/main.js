let express = require('express');
let router = express.Router();

let admin = require('../middlewares/admin')
let controlador = require("../controllers/controlador");

router.get('/', controlador.index);

router.get('/admin', admin, controlador.admin);

module.exports = router