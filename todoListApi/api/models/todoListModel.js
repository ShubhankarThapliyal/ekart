'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// var TaskSchema = new Schema({
//   name: {
//     type: String,
//     required: 'Kindly enter the name of the task'
//   },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
// });


var TaskSchema = new Schema({
  firstname: {
    type: String,
    required: 'Kindly enter the first name of user'
  },
  lastname: {
    type: String,
    required: 'Kindly enter the last name of user'
  },
  Date_of_birth: {
    type: Date,
    Required: 'Kindly enter the date of birth of user'
  },
  phone_number:{
    type: String,
    Required: 'Kindly enter the phone number of user'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of user'
  },
  password: {
    type: String,
    required: 'Kindly enter password of user'
  },
  address: {
    type: String,
    required: 'Kindly enter the address of user'
  },
  pincode: {
    type: String,
    required: 'Kindly enter pincode of user'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var CartSchema = new Schema({
  productname: {
    type: String
  },
  productprice:{
    type: String
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Carts', CartSchema);