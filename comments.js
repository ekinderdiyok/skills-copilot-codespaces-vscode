// Create web server
// Create a new file named comments.js and add the following code to it:
const express = require('express');
const router = express.Router();

// Create a new route
router.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Export the router
module.exports = router;