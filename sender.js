const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

async function init() {
    await obs.connect({ address: 'localhost:4444', password: 'BigPasswordEnergy' })
}

const scenes = {};
scenes['Scene 1'] = {
    title: 'This is the first scene',
    paths: ['Scene 2']
};
scenes['Scene 2'] = {
    title: 'This is the second scene',
    paths: ['Scene 1', 'Scene 2']
};
scenes['Scene 3'] = {
    title: 'Third scene',
    paths: ['Scene ', 'Scene ']
}

let currentScene = scenes['Scene 1']

// const newscene = scenes[scenes['Scene 1'].paths[0]]

/**
 * Changes the current scene
 * @param {string} newScene the new scene to change to
 */
async function changeScene(newScene) {
    // Change our current scene
    currentScene = scenes[newScene];

    // Send the scene change to OBS
    await obs.send('SetCurrentScene', {
        'scene-name': newScene
    });

    // Update the new choices on the poll
    // ... 
    ///currentScene.paths
} 


init().then(() => {
    // ... event handlers ..
    handleInput();
});

// ...





choice1 = ;
choice2 = ;



async function handleInput() {
    // currentScene.paths
    // returns an array of paths

    // Find the scene to change to
    if (choice1 > choice2)
    {
        try {
            // Change the scene
            await changeScene('Scene 1');
            
        } catch (error) {
            console.log(error)
        }
        
    }
    else
    {
        try
        {
            // Change the scene
            await changeScene('this.paths[1]');
        } catch (error) {
            console.log(error)
        }
    }
}
