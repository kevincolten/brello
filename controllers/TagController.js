var TagModel = require('../models/TagModel.js');

/**
* TagController.js
*
* @description :: Server-side logic for managing tags.
*/
module.exports = {
  
  /**
  * TagController.list()
  */
  list: function (req, res) {
    TagModel.find(function (err, tags) {
      if (err) {
        return res.json(500, {
          message: 'Error getting tag.'
        });
      }
      return res.json(tags);
    });
  },
  
  /**
  * TagController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    TagModel.findOne({_id: id}, function (err, tag) {
      if (err) {
        return res.json(500, {
          message: 'Error getting tag.'
        });
      }
      if (!tag) {
        return res.json(404, {
          message: 'No such tag'
        });
      }
      return res.json(tag);
    });
  },
  
  /**
  * TagController.create()
  */
  create: function (req, res) {
    var tag = new TagModel({			name : req.body.name,			color : req.body.color
    });
    
    tag.save(function (err, tag) {
      if (err) {
        return res.json(500, {
          message: 'Error saving tag',
          error: err
        });
      }
      return res.json(tag);
    });
  },
  
  /**
  * TagController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    TagModel.findOne({_id: id}, function (err, tag) {
      if (err) {
        return res.json(500, {
          message: 'Error saving tag',
          error: err
        });
      }
      if (!tag) {
        return res.json(404, {
          message: 'No such tag'
        });
      }
      
      tag.name = req.body.name ? req.body.name : tag.name;			tag.color = req.body.color ? req.body.color : tag.color;			
      tag.save(function (err, tag) {
        if (err) {
          return res.json(500, {
            message: 'Error getting tag.'
          });
        }
        if (!tag) {
          return res.json(404, {
            message: 'No such tag'
          });
        }
        return res.json(tag);
      });
    });
  },
  
  /**
  * TagController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    TagModel.findByIdAndRemove(id, function (err, tag) {
      if (err) {
        return res.json(500, {
          message: 'Error getting tag.'
        });
      }
      return res.json(tag);
    });
  }
};
