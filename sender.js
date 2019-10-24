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


choice1 = ;
choice2 = ;


async function handleInput() {
    if (choice1 > choice2)
    {
        try {
            await    obs.send('SetCurrentScene', {
                'scene-name': 'Scene 2'
            });
            
        } catch (error) {
            console.log(error)
        }
        
    }
    else
    {
        try
        {
            await obs.send('SetCurrentScene',
            {
                'scene-name': 'Scene 3'
            });
        } catch (error) {
            console.log(error)
        }
    }
}
// SetCurrentScene: { "scene-name": string };