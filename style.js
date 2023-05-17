console.log('Welcome to spotify')  
// Initialize the song index
let songIndex=0;
let audioElement =new Audio('Songs/2.mp3') ;
let masterplay=document.getElementById('masterPlay');
let progressbar=document.getElementById('myProgressBar'); 
let giff=document.getElementById('gif')   
let previous=document.getElementById('previous'); 
let masterSongName=document.getElementById('mastersSongName');
let next=document.getElementById('next'); 
// dont directly use html dom function to craete an array --> error  
// let items=(Array.from[document.getElementsByClassName('songItems')];

// --> create the collection 
let elementcoll=document.getElementsByClassName('songItems') 
let items=Array.from(elementcoll);

let songs=[  
   { songName: "Let Me Love You-Justin Bieber" , filePath: "Songs/1.mp3" ,coverPath: "Cover/cover1.jpg" } ,
   { songName: "I don't Know -Hardeep Grewal" ,  filePath: "Songs/2.mp3" , coverPath:"Cover/cover2.jpg" } ,
   { songName: "Wah Wai Wahh -Neha Kakkar " , filePath: "Songs/3.mp3" , coverPath:"Cover/cover33.jpg" } ,
   { songName: "Oye hoye Oye -Jassi Gill" , filePath: "Songs/4.mp3" , coverPath:"Cover/cover4.jpg" } ,
   { songName: "I don't care - Shipra Goyal" , filePath: "Songs/5.mp3" , coverPath:"Cover/cover5.jpg" } ,
   { songName: "Ranjhana" , filePath: "Songs/6.mp3" , coverPath:"Cover/cover6.jpg" } ,
   { songName: "kesariya - Arijit Singh" , filePath: "Songs/2.mp3" , coverPath:"Cover/cover7.jpg" }  ,
   { songName: "Manali Trance - Neha Kakkar" , filePath: "Songs/2.mp3" , coverPath:"Cover/cover7.jpg" } ,
   { songName: "Love- Whitney Houston" , filePath: "Songs/2.mp3" , coverPath:"Cover/cover7.jpg" }  
 ]  
 
items.forEach((element,i) => {
    //    console.log(element,i);
       element.getElementsByTagName("img")[0].src=songs[i].coverPath;
       element.getElementsByTagName("span")[0].innerText=songs[i].songName;
});




// create a new mp3

// audioElement.muted=false; 
// audioElement.autoplay=true; 
// audioElement.play(); 



// handle play pause button  
masterplay.addEventListener('click',()=>{
            if(audioElement.paused || audioElement.currentTime<=0){
                audioElement.play();
                masterplay.classList.remove('fa-play-circle');
                masterplay.classList.add('fa-pause-circle'); 
                giff.style.opacity=1; 

            } 
            else{
                audioElement.pause();
                masterplay.classList.remove('fa-pause-circle');
                masterplay.classList.add('fa-play-circle');
                giff.style.opacity=0;
            }
})



// Listen To Events  
//timeupdate ===> events 
audioElement.addEventListener('timeupdate', ()=>{ 
//    console.log('timeupdate'); 
   //  update seekbar 
   progress=((audioElement.currentTime)/(audioElement.duration)*100);
   // console.log(progress); 
   progressbar.value=progress;
      
})  
// Change on the updation of progress bar 
progressbar.addEventListener('change', ()=>{
    audioElement.currentTime=((progressbar.value *audioElement.duration)/100);
})

const makeAllPlays= ()=>{ 
       Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle'); 
       element.classList.add('fa-play-circle')
       })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
         element.addEventListener(('click'),(e)=>{
            //  console.log(e.target);  
             songIndex=parseInt(e.target.id);   
            //  console.log(index); 
            makeAllPlays();  
             e.target.classList.remove('fa-play-circle'); 
             e.target.classList.add('fa-pause-circle'); 
            //  masterSongName.innerText=songs[songIndex].songName;  
             audioElement.src='Songs/1.mp3';
             audioElement.currentTime=0;
             audioElement.play();
             masterplay.classList.remove('fa-play-circle'); 
             masterplay.classList.add('fa-pause-circle');
             
         })
}) 
previous.addEventListener('click' ,()=>{
     if(songIndex>=8){
      songIndex=0;
      }
      else {
       songIndex+=1;  
      }
       audioElement.src='Songs/1.mp3';
       audioElement.currentTime=0;
    //    masterSongName.innerText=songs[songIndex].songName;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle'); 
       masterplay.classList.add('fa-pause-circle');
});
next.addEventListener('click' ,()=>{
     if(songIndex<0){
      songIndex=8;
      }
      else {
       songIndex-=1; 
      } 
       audioElement.src='Songs/1.mp3';
       audioElement.currentTime=0; 
    //    masterSongName.innerText=songs[songIndex].songName;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle'); 
       masterplay.classList.add('fa-pause-circle');
});