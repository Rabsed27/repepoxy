const express = require('express');





const App = express();

App.use(express.json());
App.use.apply(express.urlencoded({extend:false}));

module.exports = App;