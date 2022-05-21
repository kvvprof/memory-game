import shuffle from './helpers'

const data = [
    {id: 1, value: 1, active: false, src: './images/bird.png', success: ''},
    {id: 2, value: 2, active: false, src: './images/cat.png', success: ''},
    {id: 3, value: 3, active: false, src: './images/dog.png', success: ''},
    {id: 4, value: 4, active: false, src: './images/dolphin.png', success: ''},
    {id: 5, value: 5, active: false, src: './images/elephant.png', success: ''},
    {id: 6, value: 6, active: false, src: './images/fish.png', success: ''},
    {id: 7, value: 7, active: false, src: './images/monkey.png', success: ''},
    {id: 8, value: 8, active: false, src: './images/squirrel.png', success: ''},
    {id: 9, value: 1, active: false, src: './images/bird.png', success: ''},
    {id: 10, value: 2, active: false, src: './images/cat.png', success: ''},
    {id: 11, value: 3, active: false, src: './images/dog.png', success: ''},
    {id: 12, value: 4, active: false, src: './images/dolphin.png', success: ''},
    {id: 13, value: 5, active: false, src: './images/elephant.png', success: ''},
    {id: 14, value: 6, active: false, src: './images/fish.png', success: ''},
    {id: 15, value: 7, active: false, src: './images/monkey.png', success: ''},
    {id: 16, value: 8, active: false, src: './images/squirrel.png', success: ''}
]

shuffle(data)

export default data