var express = require('express');
var router = express.Router();
var ItemController = require('../controllers/ItemController.js');

/*
* GET
*/
router.get('/', function (req, res) {
  ItemController.list(req, res);
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  ItemController.show(req, res);
});

/*
* POST
*/
router.post('/', function (req, res) {
  ItemController.create(req, res);
});

/*
* PUT
*/
router.put('/:id', function (req, res) {
  ItemController.update(req, res);
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
  ItemController.remove(req, res);
});

module.exports = router;
