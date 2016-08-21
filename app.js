const express = require('express');
const app = express();

// app.use(express.static('dist'));
// app.use(express.static(__dirname + 'client'));

app.use(express.static('./client'))

app.listen(3000, ()=> {
  console.log('server start');
});
