const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}

const scene1 = {
    name: 'first scene',
    paths: ['scene21', 'scene22'],
    length:  0// ...
}

async function end(){
    obs.send('SetCurrentScene', {
        'scene-name' : 'scene1'
    })
}

init();

end();