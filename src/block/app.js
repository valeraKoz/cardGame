window.application = {
    block:{
    },
    screen:{
        "select-level" : selectLevel
    },
    renderBlock: renderBlock,
    renderScreen: renderScreen,
    body: document.querySelector('.app')
}

function renderBlock(blockName, container){

}
function renderScreen(ScreenName){
    window.application.screen[ScreenName]();
}

renderScreen('select-level');