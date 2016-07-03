var express = require('express');
var router = express.Router();
var ListController = require('../controllers/ListController.js');

/*
* GET
*/
router.get('/', function (req, res) {
  ListController.list(req, res);
});

/*
* GET
*/
router.get('/:id', function (req, res) {
  ListController.show(req, res);
});

/*
* POST
*/
router.post('/', function (req, res) {
  ListController.create(req, res);
});

/*
* PUT
*/
router.put('/:id', function (req, res) {
  ListController.update(req, res);
});

/*
* DELETE
*/
router.delete('/:id', function (req, res) {
  ListController.remove(req, res);
});

module.exports = router;
