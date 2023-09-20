
function cardRender(container, card ){
    const {values, suits} = card;    
    container.appendChild(templateEngine({
        tag: 'div',
        cls: 'card',
        content: [
            {
                tag: 'div',
                cls: 'card__header',
                content: [
                    {
                        tag: 'div',
                        cls: 'card__header_value',
                        content: values
                    },
                    {
                        tag: 'img',
                        cls: 'card__header_suits',
                        attrs:{
                            src: `./src/img/card-icon/${suits}-small.png`
                        }
                    }
                ]
            },
            {
                tag: 'div',
                cls: 'card__suits',
                content:{
                    tag: 'img',
                    cls: 'card__suits_img',
                    attrs:{
                        src: `./src/img/card-icon/${suits}.png`
                    }
                }
            },
            {
                tag: 'div',
                cls: 'card__footer',
                content: [
                    {
                        tag: 'div',
                        cls: 'card__footer_value',
                        content: values
                    },
                    {
                        tag: 'img',
                        cls: 'card__footer_suits',
                        attrs:{
                            src: `./src/img/card-icon/${suits}-small.png`
                        }
                    }
                ]
            }
        ]
    }))
}