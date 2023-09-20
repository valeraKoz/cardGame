window.application = {
    block:{
        "card": cardRender
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

function renderBlock(blockName, container, data){
    window.application.block[blockName](container,data);
}
function renderScreen(ScreenName){
    window.application.screen[ScreenName]();
}

renderScreen('select-level');

function resetGame(){
        window.application.body.innerHTML = '';
        window.application.body.classList.remove('app__game-screen');
        window.application.appTimer.stop();
        renderScreen('select-level');
}