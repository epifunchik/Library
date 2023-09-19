let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let timeStart = document.querySelector('.start')
let timeEnd = document.querySelector('.end')
// console.log(play, pause, next, prev)

play.addEventListener('click', function(){
    audio.play()
    console.log('hjbv')
})
const audio = document.querySelector('audio');
console.log(audio)