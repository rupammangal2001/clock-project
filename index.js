const container = document.querySelector('.big-container');
const button = document.querySelector('.button')
const colorArray = ['#ffff00', '#800000', '#32cd32', '#864d99', '#107475', '#4d8a07']

button.addEventListener('click', event => {
    event.preventDefault()
    const color = Math.floor(Math.random() * (colorArray.length));
    document.body.style.backgroundColor = colorArray[ color ]
    console.log(color)
})