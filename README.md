# 🕹️ Tic Tac Toe

A simple, interactive web-based Tic Tac Toe game built with vanilla JavaScript and DOM manipulation. Includes features like **undo**, **restart**, and clean **OOP design** for maintainability.

---

## 🚀 Features

- ✅ Two-player mode (X vs O)
- ↩️ Undo last move
- 🔁 Restart game at any time
- 🎯 Win detection & draw handling
- 🎨 Clean and responsive UI
- 👨‍💻 Object-Oriented JavaScript architecture

---

## 🧠 How It Works

### Game Flow:
1. **Start Game**: Press the “Begin” button to activate the game board.
2. **Players Alternate**: X always starts. Players take turns clicking empty cells.
3. **Undo Move**: Press "Undo" to remove the last move made.
4. **Restart**: Clears the board and history to begin a new game.
5. **Win/Draw Detection**: Alerts the user when X or O wins, or if it's a draw.

---

## 📦 Core Components

### HTML
- Game board with 9 clickable cells
- Buttons: Begin, Undo, Restart

### JavaScript (OOP)
- `TicTacToe` class handles:
  - Game state (`gameActive`, `history`)
  - Event listeners for UI
  - Logic for move handling, undo, restart
  - Win and draw detection logic

### CSS
- Global reset and responsive layout
- Background image with centered, full-screen fit
- Styled controls with hover scaling and color feedback
- `.board__container` uses a CSS grid for the 3x3 board
- Visual feedback for hover on cells (`transform: scale`)
- Responsive text and spacing
- The `.invisible` class used to toggle control visibility
---
