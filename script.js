console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"motals",filePath:"songs/1.mp3",coverPath:"covers/a.jpg"},
    {songName:"Modern",filePath:"songs/2.mp3",coverPath:"covers/b.jpg"},
    {songName:"The second Wave",filePath:"songs/3.mp3",coverPath:"covers/c.jpg"},
    {songName:"Intense Trailer",filePath:"songs/4.mp3",coverPath:"covers/d.jpg"},
    {songName:"Explainer",filePath:"songs/5.mp3",coverPath:"covers/e.jpg"},
    {songName:"Travel",filePath:"songs/6.mp3",coverPath:"covers/f.jpg"},
    {songName:"Timelapse",filePath:"songs/7.mp3",coverPath:"covers/g.jpg"},
    {songName:"Happy Piano",filePath:"songs/8.mp3",coverPath:"covers/h.jpg"},
    {songName:"Nostalgic",filePath:"songs/9.mp3",coverPath:"covers/i.jpg"},
    {songName:"Motivational Future Bass",filePath:"songs/10.mp3",coverPath:"covers/j.jpg"},
]
   songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
   } )
    



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
       
    }
})

audioElement.addEventListener('timeupdate', ()=>{
      
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays =()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
      
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
         audioElement.src= `songs/${songIndex+1}.mp3`;
         mastersongName.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongName.currentText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})