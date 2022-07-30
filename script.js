
const startGame = () => {
    const start = document.getElementById('start')
    const introDisplay = document.querySelector('.first')
    const board = document.querySelector(".board")
    const scoreDisplay = document.querySelector('.top')
    const gameDisplay = document.querySelector('.second')
    const bottom = document.querySelector('.bottom')
    const intro = document.querySelector('audio[data-key="intro"]');
   

    start.addEventListener('click', function () {
        intro.play()
        introDisplay.classList.add('fadeOut')
     
        setTimeout(() => {
          board.style.display = 'block'
          setTimeout(()=>{
            board.classList.add('fadeIn')
            bottom.classList.add('fadeIn')
            scoreDisplay.classList.add('fadeIn')
            gameDisplay.classList.add('fadeIn');
          }, 10)
          introDisplay.style.display = 'none'
        }, 200)
      })
    }

const playGame = () => {
    const btn = document.querySelectorAll('.btn');
    const imgs = document.querySelectorAll('img');
    const mes = document.querySelector('.messageDisplay h2');
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    const shake = document.querySelector('audio[data-key="shake"]');
    const score = document.querySelector('audio[data-key="score"]');

    let pScore = 0;
    let cScore = 0;
    const select = ['rock', 'paper', 'scissors']

    mes.addEventListener('animationend', function () {
        this.style.animation = ''
      })

      imgs.forEach(img => {
        img.addEventListener('animationend', function () {
          this.style.animation = ''
        })
      })

      btn.forEach(bt => {
        bt.addEventListener('click', function () {
  
          // set the img back to rock image
          player.src = `./img/rock.png`
          computer.src = `./img/rock.png`
  
          // play audio effect
          shake.play()
  
          // remove the pointers to avoid double clicking
          btn.forEach(b => {
            b.style.pointerEvents = 'none'
          })
  
          // create a random choice for the computer
          let n = Math.floor(Math.random() * select.length)
          const playerSel = this.classList[1]
          const compSel = select[n]
  
          // add animation
          player.style.animation = 'shakePlayer 1s ease'
          computer.style.animation = 'shakeComputer 1s ease'
          mes.textContent = 'Waiting . . .'
          mes.style.animation = 'shaking 0.4s ease'
  
          // timer after run action
          setTimeout(() => {
  
            computer.src = `./img/${compSel}.png`
            player.src = `./img/${playerSel}.png`
  
            // put back the pointer events after running
            btn.forEach(b => {
              b.style.pointerEvents = 'all'
            })
  
            // evaluate who won the game
            evaluateResult(playerSel, compSel)
          }, 1000)
        })
      })  
    

const evaluateResult = (player, comp) => {
    // set the evaluation after 200 mils
    setTimeout(() => {
      // if player is rock
      if (player === 'rock') comp === 'scissors' ? win() : comp === 'paper' ? lose() : tie()
      // if player is paper
      if (player === 'paper') comp === 'rock' ? win() : comp === 'scissors' ? lose() : tie()
      // if player is scissors
      if (player === 'scissors') comp === 'paper' ? win() : comp === 'rock' ? lose() : tie()
    }, 600)
}

  // if player wins
  const win = () => {
    const plScore = document.querySelector('.plScore');

    // remove animation after 
    plScore.addEventListener('animationend', function () { this.style.animation = '' })

    // play audio
    score.play()
    pScore = pScore + 1
    mes.textContent = 'you Win!'
    plScore.textContent = pScore
    plScore.style.animation = 'addScore 0.2s ease'
  }

  // if player lose
  const lose = () => {
    const comScore = document.querySelector('.comScore');

    // remove animation after
    comScore.addEventListener('animationend', function () { this.style.animation = '' })

    // play audio
    score.play()
    cScore = cScore + 1
    mes.textContent = 'you lose!'
    comScore.textContent = cScore
    comScore.style.animation = 'addScore 0.2s ease'
  }

  //when game is tied
   const tie = () => {
   mes.textContent = `It's a tie!`
  }

}


  // start game
startGame();
playGame();

