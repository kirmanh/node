'use strict';
 
const express = require('express');
 
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hi, this is for testing for docker push on docker hub');
});
 
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});