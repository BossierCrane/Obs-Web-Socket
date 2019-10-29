

// Connection to OBS
const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}

// Stuff for pusher if pusher is use
var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '884778',
  key: '7c0ae57426d90de7c792',
  secret: '01963719fe760bd46d54',
  cluster: 'ap4',
});
pusher.trigger('my-channel', 'my-event', {
  "message": "Server Connected"
})


// Objects and paths
const scenes = {};
scenes ['scene0']={
    name: 'null-scene',
    paths: ['scene1', 'scene1'],
    length: 0
}
scenes ['scene1']= {
    name: 'first scene',
    paths: ['scene21', 'scene22'],
    length:  0// ...
}

scenes ['scene21'] = {
    name: 'city path',
    paths: ['scene31', 'scene321'],
    length: 0// ...
}

scenes ['scene22'] = {
    name: 'park path',
    paths: ['scence321', 'scene33'],
    length: 0// ...

}

scenes ['scene31'] = {
    name: 'parkrush',
    paths: ['scene323', 'scene41'],
    length: 0// ...
}
scenes ['scene321'] = {
    name: 'take too long',
    paths: ['scene43', 'scene42'],
    length: 0// ...
}
scenes ['scene322'] = {
    name: 'lost package',
    paths: ['scene43', 'scene42'],
    length: 0// ...
}
scenes ['scene323'] = {
    name: 'too late from rejecting ride',
    paths: ['scene43', 'scene42'],
    length: 0// ...
}
scenes ['scene33'] = {
    name: 'faint',
    paths: ['scene42', 'scene43'],
    length: 0// ...
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




async function Result(a, b) 
{
    // make buttons appear, gather result
    if (a < b)
    {
        try
        {
            // Change the scene
            await changeScene(currentScene.paths[0]);
            let currentScene = (currentScene.paths[0]);
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
        
        } catch (error) 
        {
            console.log(error)
        }
        
    }
}

let currentScene = scenes['scene0']


var a = 2;
var b = 55


init();
setInterval(Result, 5000);


