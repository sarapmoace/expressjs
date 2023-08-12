const express = require("express");
const app = express();
const port = 7777;

app.use(express.json())

app.use('/api/v1/arts', require('./routes/artsRoute'))

app.listen(port, () => {
  console.log(`app running on port ${port}`)
});
