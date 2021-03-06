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
// this is the connection to obs, using local host, and password protected, honestly for no real reason.
// the plugin does not require a password, and could have been left blank
const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}



// Objects and paths
// The notes and scene names in this section were to ensure I could correctly attach scenes, as well as get versions
// that were combinations of multiple scenes that weren't separated by choices, as that adds some unneeded complexity
// this complexity is however negated, as there was a work around for the ending scenes, as that was necessary
// to loop back to the beginning, and could be applied in the other circumstance
const scenes = {};
// below is a null scene, to add a gap before the server starts with a default offline screen or the like
// however, it can explain how I used the objects
scenes ['scene0']={  // this is an object name, obviously, but is also the exact name I used for my obs scenes
    name: 'null-scene', //this is a descriptive name for use by those unfamiliar with the exact numbering of scenes
    paths: ['scene1', 'scene1'], // these are the pathways this scene can take, used as the result of the arguments
    length: 12000,//.... length of the scene in milliseconds. This time is technically length of scene subtract 16000ms in most cases
    choices: ['null', 'null'] // text shown to users on the website when making their choices
}
scenes ['scene1']= {
    name: 'first scene',
    paths: ['scene21', 'scene22'],
    length:  25860,//.... scene 1
    choices: ['City', 'Park']
}

scenes ['scene21'] = {
    name: 'city path',
    paths: ['scene31', 'scene321'],
    length: 14640,//.... scene 3
    choices: ['Rush', 'Take your Time']
}

scenes ['scene22'] = {
    name: 'park path',
    paths: ['scene322', 'scene33'],
    length: 15320,//.... scene 2
    choices: ['Take a break', 'Keep going']
}

scenes ['scene31'] = {
    name: 'cityrush',
    paths: ['scene323', 'scene41'],
    length: 45200, //.... 3a and 4
    choices: ['Don\'t get in', 'Get in']
}
scenes ['scene321'] = {
    name: 'city take too long',
    paths: ['scene43', 'scene42'],
    length: 42300,//.... 3b and 5
    choices: ['Go Home ', 'Search for friend']
}
scenes ['scene322'] = {
    name: 'park lost package',
    paths: ['scene43', 'scene42'],
    length: 70460,//.... 2a and 5
    choices: ['Go Home ', 'Search for friend']
}
scenes ['scene323'] = {
    name: 'too late from rejecting ride',
    paths: ['scene43', 'scene42'],
    length: 23700,//.... this one is just scene 5
    choices: ['Go Home ', 'Search for friend']
}
scenes ['scene33'] = {
    name: 'parkrush/faint',
    paths: ['scene42', 'scene43'],
    length: 60860,//....  scene 2b and scene 6
    choices: ['Search for Friend', 'Go Home']
}

scenes ['scene41'] = {
    name: 'delivery',
    paths: ['credits', 'credits'],
    length: 34400,// ... scene 7
    choices: ['null', 'null']
}
scenes ['scene42'] = {
    name: 'late lunch',
    paths: ['credits', 'credits'],
    length: 28280,// ... scene 8
    choices: ['null', 'null']
}

scenes ['scene43'] = {
    name: 'go home',
    paths: ['credits', 'credits'],
    length: 20140,// ... scene 9
    choices: ['null', 'null']
}

scenes ['credits'] = {
    name: 'credits',
    paths: ['scene1', 'scene1'],
    length: 30000,
    choices: ['null', 'null']
}


// this is the function to change scenes
async function changeScene(newScene) {
    
    await obs.send('SetCurrentScene', {
        'scene-name' : newScene
    });
    currentScene = scenes[newScene]; // this section utilises the resulting scene as a way to call the scene's object form
}




async function Result() 
{
    
    // , gather result
    if (a > b)
    {
        try
        {
            // Change the scene
            await changeScene(currentScene.paths[0]);

           
                a = 0;
                b = 0;
                setTimeout(choosingTime, currentScene.length);
                io.emit('disappear');
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
                setTimeout(choosingTime, currentScene.length);
                io.emit('disappear');
        } catch (error) 
        {
            console.log(error)
        }
        
    }
    
}

let currentScene = scenes['scene0']


var a = 0;
var b = 0;

function choosingTime(){
if (currentScene == scenes['scene0'] ||  currentScene == scenes['scene41'] ||  currentScene == scenes['scene42'] ||  currentScene == scenes['scene43'] ||  currentScene == scenes['credits']) {
    // this function is used to automatically change scenes that have no choices, without displaying buttons
    setTimeout(Result, 0);
}
else {
    //........ call buttons
    io.emit('change', currentScene.choices[0], currentScene.choices[1])
    // as mentioned before, the above calls the scene object's text choices, to allow descriptive buttons for the choices
    setTimeout(Result, 16000); //gives users 16 seconds to make their choice, seemed to time better with the ten second countdown for some reason
}
}

init();
setTimeout(choosingTime, currentScene.length);



    

