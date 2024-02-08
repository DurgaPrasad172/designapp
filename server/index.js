const express = require('express');
const app = express();
const port = 5007;

const mongoDB = require('./db');
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World ----');
});

app.get('/',(req,res)=>{
  res.send()

});

app.use(express.json());
app.use('/api', require('./Routes/createuser'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
