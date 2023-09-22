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

const albom = [
    {
        name: 'Аид (Пламенев)\nВласть',
        img: 'aid_vlast',
        audio: '01-vlast'
    },
    {
        name: 'Геката (Зудина)\nБал забвенnия',
        img: 'gecata_bal_zabveniya',
        song: '02-bal-zabvenia'
    },
    {
        name: 'Эвридика (Бурлюкало)\nСон',
        img: 'euredika_son',
        audio: '03-son'
    },
    {
        name: 'Гермес (Егоров)\nБудь что будет',
        img: 'germes_bud_chto_budet',
        audio: '04-bud-chto-budet'
    },
]

let index = 2;

function playMusic(){
    nameArtist.innerHTML = albom[index].name
    audio.src = `../audio-player/assets/audio/${albom[index].song}.mp4`
    backgroundImg.src = `../audio-player/assets/png/${albom[index].img}.jpeg`
}

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
playMusic()

play.addEventListener('click', function(){
    playSong()
})

pause.addEventListener('click', function(){
    pauseSong()
})


// next.addEventListener('click', function(){
//     index = index > albom.length ? index = 0 : index + 1
//     // nameArtist.textContent = albom[index].name
//     // audio.src = albom[index].song
//     // backgroundImg.src = albom[index].img
//     play.style.display = 'none'
//     pause.style.display = 'block'
//     audio.play()
//     console.log(index, albom[index].name)
// })
// console.log()

// prev.addEventListener('click', function(){
//     index = index < 0 ? index = 3 : index - 1
//     nameArtist.textContent = albom[index].name;
//     audio.src = albom[index].song;
//     backgroundImg.src = albom[index].img
//     play.style.display = 'none'
//     pause.style.display = 'block'
//     audio.play()
//     console.log(index)
// })

// const timeControl = document.querySelector('.time-line')

// audio.addEventListener('play', function (e){
//     const currentTime = e.target.currentTime;
//     const duration = e.target.duration;
  

//     let currentMin = Math.floor(currentTime / 60);
//     let currentSec = Math.floor(currentTime % 60);

//     // timeControl.style.width = `${progressWidth}%`;


//     // timeEnd.textContent = `${totalMin}:${totalSec}`;
//     timeStart.textContent = `${currentMin}:${currentSec}`;
//     let progressWidth = (currentTime / duration) * 100;
//     timeControl.style.width = `${progressWidth}%`;


//     console.log(duration, timeEnd, song)

    
// })
// audio.addEventListener("loadeddata", (e) => {
//     // const currentTime = e.target.currentTime;
//     const duration = e.target.duration;
//     let totalMin = Math.floor(duration / 60);
//     let totalSec = Math.floor(duration % 60);
//     timeEnd.textContent = `${totalMin}:${totalSec}`;
// })


// // update progress bar width according to music current time
// mainAudio.addEventListener("timeupdate", (e)=>{
//     const currentTime = e.target.currentTime; //getting playing song currentTime
//     const duration = e.target.duration; //getting playing song total duration
//     let progressWidth = (currentTime / duration) * 100;
//     progressBar.style.width = `${progressWidth}%`;
  
//     let musicCurrentTime = wrapper.querySelector(".current-time"),
//     musicDuartion = wrapper.querySelector(".max-duration");
//     mainAudio.addEventListener("loadeddata", ()=>{
//     // update song total duration
//     let mainAdDuration = mainAudio.duration;
//     let totalMin = Math.floor(mainAdDuration / 60);
//     let totalSec = Math.floor(mainAdDuration % 60);
//     if(totalSec < 10){ //if sec is less than 10 then add 0 before it
//     totalSec = `0${totalSec}`;
//     }
//     musicDuartion.innerText = `${totalMin}:${totalSec}`;
//     });
//     // update playing song current time
//     let currentMin = Math.floor(currentTime / 60);
//     let currentSec = Math.floor(currentTime % 60);
//     if(currentSec < 10){ //if sec is less than 10 then add 0 before it
//     currentSec = `0${currentSec}`;
//     }
//     musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
//   });
  
//   // update playing song currentTime on according to the progress bar width
//   progressArea.addEventListener("click", (e)=>{
//     let progressWidth = progressArea.clientWidth; //getting width of progress bar
//     let clickedOffsetX = e.offsetX; //getting offset x value
//     let songDuration = mainAudio.duration; //getting song total duration
     
//     mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
//     playMusic(); //calling playMusic function
//     playingSong();
//   });
