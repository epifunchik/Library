const play = document.querySelector('.play'),
 pause = document.querySelector('.pause'),
 next = document.querySelector('.next'),
 prev = document.querySelector('.prev'),
 timeStart = document.querySelector('.start'),
 timeEnd = document.querySelector('.end'),
 audio = document.querySelector('audio')
 nameArtist = document.querySelector('.name');
 song = document.querySelector('.song');
 backgroundImg = document.querySelector('.background-img');
 inputSlider = document.querySelector('.time-line');
 slider = document.querySelector('.current-time')

const albom = [
    {
        name: 'Аид (Пламенев)\nВласть',
        img: 'aid_vlast',
        song: '01-vlast'
    },
    {
        name: 'Геката (Зудина)\nБал забвенnия',
        img: 'gecata_bal_zabveniya',
        song: '02-bal-zabvenia'
    },
    {
        name: 'Эвридика (Бурлюкало)\nСон',
        img: 'euredika_son',
        song: '03-son'
    },
    {
        name: 'Гермес (Егоров)\nБудь что будет',
        img: 'germes_bud_chto_budet',
        song: '04-bud-chto-budet'
    },
]

let index = 0;

function playMusic(){
    nameArtist.innerHTML = albom[index].name
    audio.src = `../audio-player/assets/audio/${albom[index].song}.mp4`
    backgroundImg.src = `../audio-player/assets/png/${albom[index].img}.jpeg`
}

playMusic()

function playSong(){
    audio.play()
    play.style.display = 'none'
    pause.style.display = 'block'
}

function pauseSong(){
    audio.pause()
    play.style.display = 'block'
    pause.style.display = 'none'
}

play.addEventListener('click', function(){
    playSong()
})

pause.addEventListener('click', function(){
    pauseSong()
})


next.addEventListener('click', function(){
    console.log(index)
    index = index > albom.length - 2 ? index = 0 : index + 1
    nameArtist.innerHTML = albom[index].name
    audio.src = `../audio-player/assets/audio/${albom[index].song}.mp4`
    backgroundImg.src = `../audio-player/assets/png/${albom[index].img}.jpeg`
    play.style.display = 'none'
    pause.style.display = 'block'
    audio.play()
    console.log(index, albom[index].name)
})

prev.addEventListener('click', function(){
    console.log(index)
    index = index <= 0 ? index = 3 : index - 1
    nameArtist.innerHTML = albom[index].name
    audio.src = `../audio-player/assets/audio/${albom[index].song}.mp4`
    backgroundImg.src = `../audio-player/assets/png/${albom[index].img}.jpeg`
    play.style.display = 'none'
    pause.style.display = 'block'
    audio.play()
    console.log(index)
})

const timeControl = document.querySelector('.time-line')

function timeLine(e){
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60) < 10 ? `0${Math.floor(currentTime % 60)}` : Math.floor(currentTime % 60)
    timeStart.textContent = `${currentMin}:${currentSec}`;
    timeLine.value = timeStart

    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60) < 10 ? `0${Math.floor(duration % 60)}` : Math.floor(duration % 60)
    timeEnd.textContent = `${totalMin}:${totalSec}`;

    let currentWidth = (currentTime / duration) * 100;
    slider.style.width = `${currentWidth}%`;

    // console.log(currentWidth)

}

audio.addEventListener('timeupdate', timeLine)

function timeWidth(e){
    const width = this.clientWidth;
    const widthX = e.offsetX
    const widthParrent = audio.duration

    audio.currentTime = widthX/width * widthParrent
    console.log(widthX, widthParrent)
}

inputSlider.addEventListener('click', timeWidth)
   


