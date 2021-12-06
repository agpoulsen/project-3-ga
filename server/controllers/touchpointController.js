const Touchpoint = require('./../models/touchpointModel');
const catchAsync = require('./../util/catchAsync');
const AppError = require('./../util/appError');

exports.getAllTouchpoints = catchAsync(async (req, res, next) => {
  const touchpoints = await Touchpoint.find()

  // Send response
  res.status(200).json({
    status: 'success',
    results: touchpoints.length,
    data: {
      touchpoints
    }
  });
});

exports.createTouchpoint = catchAsync( async (req, res, next) => {
  // Allow nested routes
  if(!req.body.user) req.body.user = req.user.id;

  const newTouchpoint = await Touchpoint.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      touchpoint: newTouchpoint
    }
  });
});
