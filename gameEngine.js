//Identifiers 
const cells = document.querySelectorAll('.board__cell');
const history = [];

const undo = document.getElementById('undo')
const restart = document.getElementById('restart')
const begin = document.getElementById('begin')

let game = false;

//Start Game
begin.addEventListener('click', ()=>{
    begin.classList.add('invisible')
    undo.classList.remove('invisible')
    restart.classList.remove('invisible')
    game = true;
})


// Undo Last Icon
undo.addEventListener('click', ()=>{
  const lastMove = history.pop();
  const cell = document.getElementById(lastMove.cellId);
  const icon = cell.querySelector('.board__icon');
  if (icon) icon.textContent = '';
      
})

// Clear History
restart.addEventListener('click', ()=>{
    for (let i=history.length; i > 0; i--){
    const lastMove = history.pop();
    const cell = document.getElementById(lastMove.cellId);
    const icon = cell.querySelector('.board__icon');
     if (icon) icon.textContent = '';
    }
    begin.classList.remove('invisible')
    undo.classList.add('invisible')
    restart.classList.add('invisible')
    game = false;
   
})

// Adding Icons
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!game) return;
    const iconCell = cell.querySelector('.board__icon');
    if (iconCell.textContent.trim() === '') {
      const icon = history.length % 2 === 0 ? 'X' : 'O';
      iconCell.textContent = icon;
      history.push({cellId: cell.id, icons:icon});
         checkGameStatus();
} 
  });
});

// Winning Logic
function checkGameStatus() {
  const cellValues = [];

  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById(i.toString());
    const icon = cell.querySelector('.board__icon');
    cellValues.push(icon ? icon.textContent.trim() : '');
  }

  const winningLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (const line of winningLines) {
    const [a, b, c] = line;
    const combo = cellValues[a] + cellValues[b] + cellValues[c];

    switch (combo) {
      case 'XXX':
        alert('X wins!');
         game = false;
        return 'X';
      case 'OOO':
        alert('O wins!');
         game = false;
        return 'O';
    }

  }

  if (cellValues.every(val => val !== '')) {
    alert('Draw! Reset to play again.');
    return 'draw';
  }

  return null;
}
