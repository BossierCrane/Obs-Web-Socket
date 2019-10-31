var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  //polling function
  socket.on('left', (add) => {
    console.log('Left +' + add)
    a = a + add
}); 
socket.on('right', (add) => {
    console.log('Right +' + add)
    b = b + add
});
});




// Connection to OBS
const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}




// Objects and paths
const scenes = {};
scenes ['scene0']={
    name: 'null-scene',
    paths: ['scene1', 'scene1'],
    length: 3000//....
}
scenes ['scene1']= {
    name: 'first scene',
    paths: ['scene21', 'scene22'],
    length:  40000//....
}

scenes ['scene21'] = {
    name: 'city path',
    paths: ['scene31', 'scene321'],
    length: 29000//...
}

scenes ['scene22'] = {
    name: 'park path',
    paths: ['scene321', 'scene33'],
    length: 16000//...

}

scenes ['scene31'] = {
    name: 'cityrush',
    paths: ['scene323', 'scene41'],
    length: 40000// ...
}
scenes ['scene321'] = {
    name: 'city take too long',
    paths: ['scene43', 'scene42'],
    length: 18000// ...
}
scenes ['scene322'] = {
    name: 'park lost package',
    paths: ['scene43', 'scene42'],
    length: 50000// ...
}
scenes ['scene323'] = {
    name: 'too late from rejecting ride',
    paths: ['scene43', 'scene42'],
    length: 0// ...
}
scenes ['scene33'] = {
    name: 'parkrush/faint',
    paths: ['scene42', 'scene43'],
    length: 10000// ...
}

scenes ['scene41'] = {
    name: 'delivery',
    paths: ['scene1', 'scene1'],
    length: 0// ...
}
scenes ['scene42'] = {
    name: 'late lunch',
    paths: ['scene1', 'scene1'],
    length: 0// ...
}

scenes ['scene43'] = {
    name: 'cry',
    paths: ['scene1', 'scene1'],
    length: 0// ...
}



async function changeScene(newScene) {
    
    await obs.send('SetCurrentScene', {
        'scene-name' : newScene
    });
    currentScene = scenes[newScene];
}




async function Result() 
{
    
    // make buttons appear, gather result
    if (a > b)
    {
        try
        {
            // Change the scene
            await changeScene(currentScene.paths[0]);
          
           
                a = 0;
                b = 0;
                setTimeout(Result, currentScene.length);
            
        } catch (error) 
        
        {
            console.log(error)
        }
        
    }
    else
    {

        try
        {
            // Change the scene
            await changeScene(currentScene.paths[1]);
            
                a = 0;
                b = 0;
                setTimeout(Result, currentScene.length);
            
        } catch (error) 
        {
            console.log(error)
        }
        
    }
    
}

let currentScene = scenes['scene0']


var a = 0;
var b = 0;


init();
setTimeout(Result, currentScene.length);



    

