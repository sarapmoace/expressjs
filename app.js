const express = require("express");
const app = express();
const port = 7777;

app.get('/', (req, res) => {
  res.status(200)
  .json( {message: 'Hello from the server side'} )
})

app.post('/', (req, res) => {
  res.send('You can post in this URL')
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
});
