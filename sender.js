const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

const scenes = [
    {
        scene: 'Start Scene',
        paths: ['Scene 2-1', 'Scene 2-2']
    },
    {
        scene: 'Scene 2-1',
        paths: ['Scene 3-1', 'Scene 3-2-1']
    },
    {
        scene: 'Scene 2-2',
        paths: ['Scene 3-2-2', 'Scene 3-3']
    },
    {
        scene: 'Scene 3-1',
        paths: ['Scene 3-2-3', 'Scene 4-1']
    },
    {
        scene: 'Scene 3-2-1',
        paths: ['Scene 4-2', 'Scene4-3']
    },
    {
        scene: 'Scene 3-2-2',
        paths: ['Scene 4-2', 'Scene4-3']
    },
    {
        scene: 'Scene 3-2-3',
        paths: ['Scene 4-2', 'Scene4-3']
    },
    {
        scene: 'Scene 3-3',
        paths: ['Scene 4-2', 'Scene 4-3']
    }
    
]

const start = scenes[0]; 

const scene21 = scenes.find((s) => s.scene === 'Scene 2-1')

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
