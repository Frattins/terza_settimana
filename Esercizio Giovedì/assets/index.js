const generateMainBoard = function () {
    // funzione che crea il tabellone
        const board = document.querySelector(".tabellone")
        for (let i = 1 ; i < 77 ; i++) {
        board.innerHTML += `
            <div class ="celle">
            ${i}
            </div>
            `
        }
}

generateMainBoard()

 // inserire in un arrey
 const fillArray = function () {
    const arr = []
    for (let i = 0; i < 76; i++) {
      arr.push(i + 1)
    }
    return arr
  }


  const getRandomNum = function(range) {

    if (range && range.length > 0) {
        const randIndex = Math.floor(Math.random() * range.length);
        const random = range.splice(randIndex, 1)[0];
        return random;
    }
};

   
getRandomNum()

const generateRandNumber= function () {
    const random = getRandomNum(range)
    const cells = document.querySelectorAll(".tabellone .celle")
    cells[random -1].classList.add("evidenza")

    //stampare il numero
    // associare la classe
}

const Cliccami = document.getElementById("Numerorandomico")
Cliccami.addEventListener("click", function() {
    generateRandNumber()
})
/* non so perchè mi annulla tutto
const CliccamiAncora = document.getElementById('CreaCartelle')
CreaCartelle.addEventListener("click", function() {
    generateUserBoards()
*/
const generateUserBoards = function (range) {
    // genere e gestisce le tabelline
    const usersNumber = document.getElementById('cartellenuove').value
    const container = document.querySelector('.container')
    if (parseInt(usersNumber) > 0) {
      for (let i = 0; i < parseInt(usersNumber); i++) {
        const range = fillArray()
        const board = document.createElement('div')
        board.className = 'board user-board'
        for (let i = 0; i < 24; i++) {
          const random = getRandomNum(range)
          board.innerHTML += 
          `<div class='cell'>
          ${random}
          </div>`
        }
        container.appendChild(board)
      }
    }
  }



    const range = fillArray()