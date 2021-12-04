const User = require('./../models/userModel');

exports.getAllUsers = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'daddy no'
  })
};

exports.getUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};

exports.createUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'Create a user'
  })
};

exports.updateUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};

exports.deleteUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined'
  })
};
