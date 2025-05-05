const express = require('express');
const app = express();
const port = 3000;

// Route for testing the app
app.get('/', (req, res) => {
  res.send('Hello from Docker!');
});

// Optional: example function to test
function add(a, b) {
  return a + b;
}

// Only start server if not testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

// Export both app and function
module.exports = { app, add };
