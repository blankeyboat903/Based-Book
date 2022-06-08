var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
  
var fs = require('fs');
var path = require('path');
require('dotenv/config');

mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }, err => {
      console.log('connected')
  });

function App() {
  return (
    <CloudinaryContext cloudName="girthycloud">
  <div>
    <Image publicId="sample" width="50" />
  </div>
  <Image publicId="sample" width="0.5" />
</CloudinaryContext>
  );
}

export default App;
