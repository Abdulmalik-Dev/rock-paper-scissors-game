// Variables
let playerResult = document.getElementById("player-result"),
  computerResult = document.getElementById("computer-result"),
  playerChoosingImg = document.getElementById("player-choosing-img"),
  computerChoosingImg = document.getElementById("computer-choosing-img"),
  choosingImages = document.querySelectorAll(".choosing-play-area img"),

  computerChoosing = '',
  playerChoosing = '';

choosingImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    playerChoosingImg.src = e.target.src;
    playerChoosing = e.target.dataset.play;
    playerChoosingImg.dataset.play = e.target.dataset.play;

    computerPlay();
    validation();
  });
});

// Computer Play
const computerPlay = () => {
    let random = Math.floor(Math.random() * choosingImages.length);
    
    computerChoosingImg.src = choosingImages[random].src
    computerChoosing = choosingImages[random].dataset.play;
    computerChoosingImg.dataset.play = choosingImages[random].dataset.play;
}

function validation(){
    if(playerChoosing === computerChoosing) checkWinner('no winner')
    else if(playerChoosing === 'rock' && computerChoosing === 'scissors' || 
    playerChoosing === 'scissors' && computerChoosing === 'rock') checkWinner('rock')
    else if(playerChoosing === 'paper' && computerChoosing === 'rock' || 
    playerChoosing === 'rock' && computerChoosing === 'paper') checkWinner('paper')
    else if(playerChoosing === 'scissors' && computerChoosing === 'paper' || 
    playerChoosing === 'paper' && computerChoosing === 'scissors') checkWinner('scissors')
}

function checkWinner(winnerName){
    [computerChoosingImg, playerChoosingImg].forEach(img => {
        img.dataset.play == winnerName ? img.parentElement.classList.add('winner'): img.parentElement.classList.remove('winner');
    });

    if(winnerName === "no winner") {
        computerChoosingImg.parentElement.classList.add('no-winner');
        playerChoosingImg.parentElement.classList.add('no-winner');
    }else{
        computerChoosingImg.parentElement.classList.remove('no-winner');
        playerChoosingImg.parentElement.classList.remove('no-winner');
        
    }

    let winner = document.querySelector(".winner") != null ? document.querySelector(".winner").classList[0] : null;
    score(winner);

    setTimeout(() => {
        computerChoosingImg.parentElement.classList.remove('no-winner', 'winner');
        playerChoosingImg.parentElement.classList.remove('no-winner', 'winner');
    }, 1000)
}

function score(winnerScore){
    if(winnerScore === "player-choosing") playerResult.innerHTML++
    else if(winnerScore === "computer-choosing") computerResult.innerHTML++
    else null;
}