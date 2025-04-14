import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
// Define a route for the root URL
//app.listen(port, () => {
//  console.log(`Server is running on http://localhost:${port}`);
//});