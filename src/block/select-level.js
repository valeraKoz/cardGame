function selectLevel(){
    console.log('ЭКРАН ВЫБОРА СЛОЖНОСТИ')
    const bodyApp = window.application.body;

    bodyApp.appendChild(templateEngine({
        tag: 'div',
        cls: 'select-level',
        content: [
            {
                tag: 'h1',
                cls: 'select-level__title',
                content: 'Выбери сложность'
            },
            {
                tag: 'form',
                cls: 'select-level__form',
                content: [
                    {
                        tag: 'div',
                        cls: 'select-level__variant',
                        content:[
                            {
                                tag: 'div',
                                cls: 'select-level__complexity-btn',
                                content:
                                [
                                    {
                                        tag: 'input',
                                        cls: 'select-level__complexity',
                                        attrs:
                                            {
                                                type: 'radio',
                                                name: 'complexity',
                                                value: 1,
                                                id: 'complexity-1'
                                            }
                                    },
                                    {
                                        tag: 'label',
                                        content: '1',
                                        cls:'select-level__complexity-label',
                                        attrs: {
                                            for: 'complexity-1'
                                        }
                                    }
                                ]
                            },
                            {
                                tag: 'div',
                                cls: 'select-level__complexity-btn',
                                content:
                                [
                                    {
                                        tag: 'input',
                                        cls: 'select-level__complexity',
                                        attrs:
                                            {
                                                type: 'radio',
                                                name: 'complexity',
                                                value: 2,
                                                id: 'complexity-2'
                                            }
                                    },
                                    {
                                        tag: 'label',
                                        content: '2',
                                        cls:'select-level__complexity-label',
                                        attrs: {
                                            for: 'complexity-2'
                                        }
                                    }
                                ]
                            },
                            {
                                tag: 'div',
                                cls: 'select-level__complexity-btn',
                                content:
                                [
                                    {
                                        tag: 'input',
                                        cls: 'select-level__complexity',
                                        attrs:
                                            {
                                                type: 'radio',
                                                name: 'complexity',
                                                value: 3,
                                                id: 'complexity-3'
                                            }
                                    },
                                    {
                                        tag: 'label',
                                        cls:'select-level__complexity-label',
                                        content: '3',
                                        attrs: {
                                            for: 'complexity-3'
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tag: 'button',
                        cls: 'select-level__submit',
                        attrs: {
                            type: 'submit'
                        },
                        content: 'Старт'
                    }
                ]
            }
        ]
    }))

    const form = document.querySelector('.select-level__form');
    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        const formData = new FormData(form);
        const {complexity} = Object.fromEntries(formData)
        if(complexity === undefined){
            return;
        }
        // Init global complexity
        window.application.setting.complexity = complexity;
        renderGameSetting(window.application.setting.complexity);
        deckBuilder();
    })


    const label = document.querySelectorAll('.select-level__complexity-label');
    label.forEach( e => {
        e.addEventListener('click',(event)=>{
            label.forEach(e => e.style.color = '#0080C1')
            event.target.style.color = 'green';
        })
    })
}


function renderGameSetting(complexity){
    window.application.setting.cardOfGame = complexity * 6;
    window.application.renderScreen('game-screen');
}