// middleware/errorMiddleware.js

const errorMiddleware = (error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ message: 'Server error' });
  };
  
  module.exports = errorMiddleware;
  