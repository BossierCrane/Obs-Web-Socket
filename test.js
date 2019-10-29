const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}



async function end(){
    await obs.send('SetCurrentScene', {
        'scene-name' : 'scene1'
    })
}

init();

end();