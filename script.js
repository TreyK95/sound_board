//[array]
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

//loop through each sound, create a button, give it a class of btn,
//set inner text to the sound itself..
//insert the button and style them with append child and pass in the button

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  //listen for on click, on click run the function
  btn.addEventListener("click", () => {
    //this will stop the previous sound from playing
    stopSongs();
    //this will play the audio
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

//
function stopSongs() {
  //for each sound, create a variable called 'song' and select the particular sound
  //
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    //pause the sound
    song.pause();
    //grab current time and reset it to 0
    song.currentTime = 0;
  });
}

//HTML audio API
