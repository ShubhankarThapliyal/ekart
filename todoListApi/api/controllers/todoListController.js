'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  Cart = mongoose.model('Carts');
  exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
exports.list_all_carts = function(req, res) {
  Cart.find({}, function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};


exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.create_a_cart = function(req, res) {
  var new_cart = new Cart(req.body);
  new_cart.save(function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.read_a_cart = function(req, res) {
  Task.findById(req.params.cartId, function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.update_a_cart = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.cartId}, req.body, {new: true}, function(err, cart) {
    if (err)
      res.send(err);
    res.json(cart);
  });
};
// exports.update_a_cart = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.cartId}, req.body, {new: true}, function(err, cart) {
//     if (err)
//       res.send(err);
//     res.json(cart);
//   });
// };
      



exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
// exports.delete_a_cart = function(req, res) {
//   Task.remove({
//     _id: req.params.cartId
//   }, function(err, cart) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Cart_Product successfully deleted' });
//   });
// };