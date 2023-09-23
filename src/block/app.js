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
    },
    compareCard: []
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


function showCards(card){
    card.childNodes.forEach(child => {
        if(child.classList.contains('card__frontside')){
            child.classList.remove('card__frontside_rotate');
        }
        if(child.classList.contains('card__backside')){
            child.classList.remove('card__backside_rotate');
        }
        
    });
}
function hideCard(card){
    card.childNodes.forEach(child => {
        if(child.classList.contains('card__frontside')){
            child.classList.add('card__frontside_rotate');
        }
        if(child.classList.contains('card__backside')){
            child.classList.add('card__backside_rotate');
        }
        
    });
}