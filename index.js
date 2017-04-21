const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = require('./router');

// db
mongoose.connect('mongodb://localhost:auth/auth');

// configure
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listning on:', port);
