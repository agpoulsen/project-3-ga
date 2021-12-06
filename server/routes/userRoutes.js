const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const touchpointController = require('./../controllers/touchpointController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/')
  .get(authController.protect, userController.getAllUsers)
  .post(userController.createUser);

router.patch('/updateMe', authController.protect, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router
  .route('/:userId/touchpoints')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    touchpointController.createTouchpoint
  );

module.exports = router;
