var UserModel = require('../models/UserModel.js');

/**
* UserController.js
*
* @description :: Server-side logic for managing users.
*/
module.exports = {
  
  /**
  * UserController.list()
  */
  list: function (req, res) {
    UserModel.find(function (err, users) {
      if (err) {
        return res.json(500, {
          message: 'Error getting user.'
        });
      }
      return res.json(users);
    });
  },
  
  /**
  * UserController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    UserModel.findOne({_id: id}, function (err, user) {
      if (err) {
        return res.json(500, {
          message: 'Error getting user.'
        });
      }
      if (!user) {
        return res.json(404, {
          message: 'No such user'
        });
      }
      return res.json(user);
    });
  },
  
  /**
  * UserController.create()
  */
  create: function (req, res) {
    var user = new UserModel({			username : req.body.username,			password : req.body.password
    });
    
    user.save(function (err, user) {
      if (err) {
        return res.json(500, {
          message: 'Error saving user',
          error: err
        });
      }
      return res.json(user);
    });
  },
  
  /**
  * UserController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    UserModel.findOne({_id: id}, function (err, user) {
      if (err) {
        return res.json(500, {
          message: 'Error saving user',
          error: err
        });
      }
      if (!user) {
        return res.json(404, {
          message: 'No such user'
        });
      }
      
      user.username = req.body.username ? req.body.username : user.username;			user.password = req.body.password ? req.body.password : user.password;			
      user.save(function (err, user) {
        if (err) {
          return res.json(500, {
            message: 'Error getting user.'
          });
        }
        if (!user) {
          return res.json(404, {
            message: 'No such user'
          });
        }
        return res.json(user);
      });
    });
  },
  
  /**
  * UserController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    UserModel.findByIdAndRemove(id, function (err, user) {
      if (err) {
        return res.json(500, {
          message: 'Error getting user.'
        });
      }
      return res.json(user);
    });
  }
};
