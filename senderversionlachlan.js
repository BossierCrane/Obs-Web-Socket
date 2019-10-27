

// Connection to OBS
const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}
// Stuff for pusher if pusher is use
var Pusher = require('pusher');

var Pusher = new Pusher({
  appId: '884778',
  key: '7c0ae57426d90de7c792',
  secret: '01963719fe760bd46d54',
  cluster: 'ap4',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "Server Connected"
})


// Objects and paths
const scene1 = {
    name: 'first scene',
    paths: ['scene2-1', 'scene2-2']
}

const scene21 = {
    name: 'city path',
    paths: ['scene3-1', 'scene3-2-1']
}

const scen22 = {
    name: 'park path',
    paths: ['scence3-2-1', 'scene 3-3']
}

const scene31 = {
    name: 'parkrush',
    paths: ['scene3-2-3', 'scene4-1']
}
const scene321 = {
    name: 'take too long',
    paths: ['scene4-3', 'scene4-2']
}
const scene322 = {
    name: 'lost package',
    paths: ['scene4-3', 'scene4-2']
}
const scene323 = {
    name: 'too late from rejecting ride',
    paths: ['scene4-3', 'scene4-2']
}
const scene33 = {
    name: 'faint',
    paths: ['scene4-2', 'scene4-3']
}

const scene41 = {
    name: 'delivery',
    paths: ['scene1', 'scene1']
}
const scene42 = {
    name: 'late lunch',
    paths: ['scene1', 'scene1']
}

const scene42 = {
    name: 'cry',
    paths: ['scene1', 'scene1']
}



C:\Users\lachl\OneDrive\Documents\GitHub\Obs-Web-Socket\senderversionlachlan.js

async function changeScene(choice) {
    obs.send('SetCurrentScene', {
        'scene-name' : choice 
    });
}

async function Result(a, b) 
{
    if (a < b)
    {
        try
        {
            // Change the scene
            await changeScene('this.paths[0]');
        
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
            await changeScene('this.paths[1]');
        
        } catch (error) 
        {
            console.log(error)
        }
    }
    }
