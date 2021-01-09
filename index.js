const express = require('express');
const app = express();
const serverlessHttp = require('serverless-http');


app.post('/', async (req, res) => {
  try {
    const name = JSON.parse(req.body);
    console.log(name);
    if(name){
      return res.send('Its man!');
    }
    res.send('Okay well!!');
  } catch (error) {
    res.send(error);
  }
});


// app.listen('3000', () => {
//   console.log('App is running.....');
// });

module.exports.startsEC2 = serverlessHttp(app);
