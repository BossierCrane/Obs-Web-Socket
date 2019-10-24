const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

init().then(() => {
    // ... event handlers ..
    handleInput();
});

// ...


async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}

async function handleInput() {
    if (1 === 1)
    {
        try {
            await    obs.SetCurrentScene
            ({
                'Scene 2': scene.name
            });
            
        } catch (error) {
            console.log(error)
        }
        
    }
}
// SetCurrentScene: { "scene-name": string };