// cards        - все возможные карточки
// cards = 
//  { values: "номер",
//    suits:  "масть" }
// 
// cardsInGame  - рандомно расположенные карточки 
function deckBuilder(){
    let cards = [];
    let cardsInGame = [];
    const values = ["6","7","8","9","10","J","Q","K","A"];
    const suits  = ["clubs","hearts","diamonds","spades"];
    // Создает все возможные карточки
    for(let i = 0; i < values.length; i++){
        for(let j = 0; j < suits.length; j++){
            cards.push({
                values: values[i],
                suits: suits[j]
            })
        }
    }

    // Создает массив попарных карточек по уровню сложности в рандомном порядке
    const randomeCardIndex = _.shuffle(_.range(0, 36)).slice(0 , window.application.setting.cardOfGame/2)
    randomeCardIndex.forEach( el => {
        cardsInGame.push(cards[el]);
        cardsInGame.push(cards[el]);
    })
    cardsInGame.sort(()=> Math.random() - 0.5);
    cardsInGame.forEach( el => {
        window.application.renderBlock('card',document.querySelector('.app__cards'),el);
    })

    cardsSetting();
}

function cardsSetting(){
    const cards = document.querySelectorAll('.card');

    setTimeout(()=>{
        window.application.appTimer = new Timer(document.querySelector('.app__timer'));
        cards.forEach(el=>{
            hideCard(el);
            el.addEventListener('click', cardsEventOnClick);
        })
    },5000)
}

function cardsEventOnClick(event){
    const target = event.currentTarget;
    showCards(target);
    window.application.compareCard.push(target.getAttribute('data-value'));
    if(window.application.compareCard.length == 2){

        if(window.application.compareCard[0] === window.application.compareCard[1]){
            window.application.compareCard = [];
            window.application.setting.cardOfGame -=2;
        } else{
            loseGame();
        }
    }
    
    if(window.application.setting.cardOfGame === 0){
        winGame();
    }
}