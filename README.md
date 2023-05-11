# Tic Tac Toe
This is a simple web application built using React, TypeScript, and Vite where two players can play Tic Tac Toe.
https://en.wikipedia.org/wiki/Tic-tac-toe

## Demo
You can view a live demo of this application https://tic-tac-toe-react-ts.netlify.app/.

## Getting Started
Clone the repository to your local machine:
```sh
https://github.com/geoelectrof/tic-tac-toe-react-ts.git
```
Install the dependencies and start the server.
```sh
cd tic-tac-toe-react-ts-main
npm install
npm run dev
```
This will start the development server and open the application in your default browser at http://localhost:5173/.

## Building the Application
To build the application for production, run the following command:
```sh
npm run build
```
This will generate a production-ready build of the application in the `dist` directory.

## Game Rules
The rules of the game are the same as the classic Tic Tac Toe game:
- The game is played on a 3x3 grid.
- The first player is X, and the second player is O.
- Players take turns to place their symbol (X or O) on an empty cell.
- The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.
- If all cells are filled and no player has three in a row, the game is a draw.

## Features
- Two players can play the game on the same device
- The game displays who won or if the game is a draw
- The game offers the possibility to start a new game

## Technologies Used
- React
- TypeScript
- Vite