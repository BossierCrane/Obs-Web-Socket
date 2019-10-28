

// Connection to OBS
const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}
// Stuff for pusher if pusher is use
//var Pusher = require('pusher');
//
//var pusher = new Pusher({
//  appId: '884778',
//  key: '7c0ae57426d90de7c792',
//  secret: '01963719fe760bd46d54',
//  cluster: 'ap4',
//});
//
//pusher.trigger('my-channel', 'my-event', {
//  "message": "Server Connected"
//})

//

//

// Objects and paths
const scene1 = {
    name: 'first scene',
    paths: ['scene21', 'scene22'],
    length:  0// ...
}

const scene21 = {
    name: 'city path',
    paths: ['scene31', 'scene321'],
    length: 0// ...
}

const scen22 = {
    name: 'park path',
    paths: ['scence321', 'scene 33'],
    length: 0// ...

}

const scene31 = {
    name: 'parkrush',
    paths: ['scene323', 'scene41'],
    length: 0// ...
}
const scene321 = {
    name: 'take too long',
    paths: ['scene43', 'scene42'],
    length: 0// ...
}
const scene322 = {
    name: 'lost package',
    paths: ['scene43', 'scene42'],
    length: 0// ...
}
const scene323 = {
    name: 'too late from rejecting ride',
    paths: ['scene43', 'scene42'],
    length: 0// ...
}
const scene33 = {
    name: 'faint',
    paths: ['scene42', 'scene43'],
    length: 0// ...
}

const scene41 = {
    name: 'delivery',
    paths: ['scene1', 'scene1'],
    length: 0// ...
}
const scene42 = {
    name: 'late lunch',
    paths: ['scene1', 'scene1'],
    length: 0// ...
}

const scene43 = {
    name: 'cry',
    paths: ['scene1', 'scene1'],
    length: 0// ...
}



async function changeScene(choice) {
    obs.send('SetCurrentScene', {
        'scene-name' : choice 
    });
}

async function end(){
    obs.send('SetCurrentScene', {
        'scene-name' : 'scene1'
    })
}

async function Result(a, b) 
{
    // make buttons appear, gather result
    if (a < b)
    {
        try
        {
            // Change the scene
            await changeScene(current.paths[0]);
        
        } catch (error) 
        {
            console.log(error)
        }
        var current = current.paths[0];
    }
    else
    {
        try
        {
            // Change the scene
            await changeScene(current.paths[1]);
        
        } catch (error) 
        {
            console.log(error)
        }
        var current = current.paths[1];
    }
}


var current = scene1;

init();

while (true)    {

while (current !== scene41 || current !== scene42 || current !== scene43)
{
setTimeout(Result, 5000, 2, 1);
}
setTimeout(end, 5000);


}