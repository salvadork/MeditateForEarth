const express = require('express');
const app = express();
const http = require('http')
const path = require('path');
const socketIo = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const someClicks = require('./models/schema.js');
const mongoose = require('mongoose');

const server = http.createServer(app);
const io = socketIo(server);


mongoose.connect('mongodb://localhost/meditate4earth',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})


app.use(express.static(path.join(__dirname, '..', 'client', 'build')));


io.on("connection", (socket) =>{
  console.log("socket connected")

  someClicks.find().exec((err, data) => {

    socket.emit('init',data);
  });

  socket.on('clicks', async clicks => {

    const chatdb = await someClicks.find();
  
      io.emit('init',chatdb);

    const data = new someClicks({
      location: clicks.location,
      date: clicks.date,
    });

    await data.save()
    const chatdb2 = await someClicks.find();
        
      io.emit('init',chatdb2);
  });
 });

server.listen(port, () => {
  console.log(`app running on port ${port}`)
});