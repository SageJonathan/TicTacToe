// //Identifiers 
// const cells = document.querySelectorAll('.board__cell');
// const history = [];

// const undo = document.getElementById('undo')
// const restart = document.getElementById('restart')
// const begin = document.getElementById('begin')

// let game = false;

// //Start Game
// begin.addEventListener('click', ()=>{
//     begin.classList.add('invisible')
//     undo.classList.remove('invisible')
//     restart.classList.remove('invisible')
//     game = true;
// })


// // Undo Last Icon
// undo.addEventListener('click', ()=>{
//  if (!game) return;
//   const lastMove = history.pop();
//   const cell = document.getElementById(lastMove.cellId);
//   const icon = cell.querySelector('.board__icon');
//   if (icon) icon.textContent = '';
      
// })

// // Clear History
// restart.addEventListener('click', ()=>{
//     for (let i=history.length; i > 0; i--){
//     const lastMove = history.pop();
//     const cell = document.getElementById(lastMove.cellId);
//     const icon = cell.querySelector('.board__icon');
//      if (icon) icon.textContent = '';
//     }
//     begin.classList.remove('invisible')
//     undo.classList.add('invisible')
//     restart.classList.add('invisible')
//     game = false;
   
// })

// // Adding Icons
// cells.forEach(cell => {
//   cell.addEventListener('click', () => {
//     if (!game) return;
//     const iconCell = cell.querySelector('.board__icon');
//     if (iconCell.textContent.trim() === '') {
//       const icon = history.length % 2 === 0 ? 'X' : 'O';
//       iconCell.textContent = icon;
//       history.push({cellId: cell.id, icons:icon});
//          checkGameStatus();
// } 
//   });
// });

// // Winning Logic
// function checkGameStatus() {
//   const cellValues = [];

//   for (let i = 1; i <= 9; i++) {
//     const cell = document.getElementById(i.toString());
//     const icon = cell.querySelector('.board__icon');
//     cellValues.push(icon ? icon.textContent.trim() : '');
//   }

//   const winningLines = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
//   ];

//   for (const line of winningLines) {
//     const [a, b, c] = line;
//     const combo = cellValues[a] + cellValues[b] + cellValues[c];

//     switch (combo) {
//       case 'XXX':
//         alert('X wins!');
//          game = false;
//         return 'X';
//       case 'OOO':
//         alert('O wins!');
//          game = false;
//         return 'O';
//     }

//   }

//   if (cellValues.every(val => val !== '')) {
//     alert('Draw! Reset to play again.');
//     return 'draw';
//   }

//   return null;
// }


// Draft code above.. OOP Below

class TicTacToe {
  constructor() {
    this.history = [];
    this.gameActive = false;
    this.cells = document.querySelectorAll('.board__cell');
    this.undoBtn = document.getElementById('undo');
    this.restartBtn = document.getElementById('restart');
    this.beginBtn = document.getElementById('begin');

    this.init();
  }

  init() {
    this.beginBtn.addEventListener('click', () => this.startGame());
    this.undoBtn.addEventListener('click', () => this.undoMove());
    this.restartBtn.addEventListener('click', () => this.restartGame());

    this.cells.forEach(cell => {
      cell.addEventListener('click', () => this.handleCellClick(cell));
    });
  }

  startGame() {
    this.beginBtn.classList.add('invisible');
    this.undoBtn.classList.remove('invisible');
    this.restartBtn.classList.remove('invisible');
    this.gameActive = true;
  }

  undoMove() {
    if (!this.gameActive || this.history.length === 0) return;

    const lastMove = this.history.pop();
    const cell = document.getElementById(lastMove.cellId);
    const icon = cell.querySelector('.board__icon');
    if (icon) icon.textContent = '';
  }

  restartGame() {
    while (this.history.length > 0) {
      const move = this.history.pop();
      const cell = document.getElementById(move.cellId);
      const icon = cell.querySelector('.board__icon');
      if (icon) icon.textContent = '';
    }

    this.beginBtn.classList.remove('invisible');
    this.undoBtn.classList.add('invisible');
    this.restartBtn.classList.add('invisible');
    this.gameActive = false;
  }

  handleCellClick(cell) {
    if (!this.gameActive) return;

    const iconCell = cell.querySelector('.board__icon');
    if (iconCell.textContent.trim() === '') {
      const icon = this.history.length % 2 === 0 ? 'X' : 'O';
      iconCell.textContent = icon;
      this.history.push({ cellId: cell.id, icon });

      this.checkGameStatus();
    }
  }

  checkGameStatus() {
    const cellValues = [];

    for (let i = 1; i <= 9; i++) {
      const cell = document.getElementById(i.toString());
      const icon = cell.querySelector('.board__icon');
      cellValues.push(icon ? icon.textContent.trim() : '');
    }

    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const [a, b, c] of winningLines) {
      const combo = cellValues[a] + cellValues[b] + cellValues[c];
      if (combo === 'XXX') {
        alert('X wins!');
        this.gameActive = false;
        return;
      }
      if (combo === 'OOO') {
        alert('O wins!');
        this.gameActive = false;
        return;
      }
    }

    if (cellValues.every(val => val !== '')) {
      alert('Draw! Reset to play again.');
      this.gameActive = false;
    }
  }
}

// Instantiate the game
const newGame = new TicTacToe();
