const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}
const scene1 = {
    name: 'first scene',
    paths: ['scene2-1', 'scene2-2']
}


async function SceneChange() {
    obs.send('SetCurrentScene', {
        'scene-name' :  // ...
    });
}