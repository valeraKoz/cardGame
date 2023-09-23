function gameScreen(){
    window.application.body.innerHTML = '';
    console.log('СЛОЖНОСТЬ ИГРЫ: ', window.application.setting.complexity);
    console.log('Кол-во карточек: ',window.application.setting.cardOfGame);
    window.application.body.classList.add('app__game-screen');

    window.application.body.appendChild(templateEngine({
        tag: 'div',
        cls: 'app__header',
        content: [
            {
                tag: 'div',
                cls: 'app__timer',
            },
            {
                tag: 'button',
                cls: 'app__reset',
                content: 'Начать заново'
            }
        ]
    }))
    window.application.body.appendChild(templateEngine({
        tag: 'div',
        cls: 'app__cards'
    }))

    
    
    
    // Обработчик кнопки РЕСЕТ
    const appReset = document.querySelector('.app__reset');
    appReset.addEventListener('click', ()=>{
        resetGame();
    })
}
