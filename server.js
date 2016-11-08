const Express = require('express'),
  SocketIO = require('socket.io')
  ;

const App = Express();

App.use(Express.static(__dirname+'/frontend'));


const PORT = 8080;
const PortListener = App.listen(PORT, () => {
  console.log('App Server listening on port: '+ PORT);
});

const io = SocketIO(PortListener);
io.on('connection', socket => {
  socket.on('message', data => {
    console.log('GOT DATA: ', data);
    io.emit('message', data);
  });
});
