window.application = {
    block:{
    },
    screen:{
        "select-level" : selectLevel,
        "game-screen": gameScreen
    },
    renderBlock: renderBlock,
    renderScreen: renderScreen,
    body: document.querySelector('.app'),
    setting: {
        complexity: undefined,
        cardOfGame: undefined,
    }
}

function renderBlock(blockName, container){

}
function renderScreen(ScreenName){
    window.application.screen[ScreenName]();
}

renderScreen('select-level');