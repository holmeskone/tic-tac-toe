const gameBoard = (function(){
    const rows = 3;
    const columns = 3;
    const initialBoard = [];

    function startBoard(){
        for (i=0; i<rows; i++){
            initialBoard[i] = [];
            for (j=0; j<columns; j++){
                initialBoard[i].push(['']);
        };
    };
    return initialBoard;
    }

    let playingBoard = startBoard();
    const player1 = player(1,'X');
    const player2 = player(2,'O');
    
    function currentBoard(user,row,cell,symbol){
        if(playingBoard[row][cell]!=''){
            console.log('Cell already taken');
        }
        else if (winnerChecker === 'Winner'){
            playingBoard = startBoard()
            winnerChecker(user, symbol);

        }
        else{
            playingBoard[row][cell]=(symbol);
            console.log(playingBoard);
            winnerChecker(user, symbol);
        }
    }

    function winnerChecker(user, symbol){
        let j = 0;
        let i = 0;
        const winnerText = document.getElementById('winner-text');
        //Diagonal Winner
        if (playingBoard[j][j] === symbol && playingBoard[j+1][j+1] === symbol && playingBoard[j+2][j+2] === symbol){
            console.log(`Player ${user} wins with ${symbol}`);
            // winnerText.style.display = "block";
            let restart = prompt(`WE HAVE A WINNER, PLAYER ${user} WINS! Would you like to play again? Y/N`);
                if(restart === 'Y'){
                    playingBoard = startBoard();
                    player1.movement();
                }
                else{
                    console.log(playingBoard);
                }
        }
        // A draw!
        else if(playingBoard[j][i] !='' && playingBoard[j+1][i+1] !='' && playingBoard[j+2][i+2] !='' &&
            playingBoard[j+1][i] !='' && playingBoard[j+1][i+1] !='' && playingBoard[j+1][i+2] !='' &&
            playingBoard[j+2][i] !='' && playingBoard[j+2][i+1] !='' && playingBoard[j+2][i+2] !=''){
            console.log(`It's a draw!`)
            let restart = prompt('Would you like to play again? Y/N');
                if(restart === 'Y'){
                    playingBoard = startBoard();
                    player1.movement();
                }
                else{
                    console.log(playingBoard);
                }
            }

        for(i = 0; i<3; i++){
                //Row Winner
                if(playingBoard[i][j] === symbol && playingBoard[i][j+1] === symbol && playingBoard[i][j+2] === symbol){
                    console.log(`Player ${user} wins with ${symbol}`);
                    let restart = prompt('Would you like to play again? Y/N');
                    if(restart === 'Y'){
                    playingBoard = startBoard();
                    player1.movement();
                    }
                    else{
                    console.log(playingBoard);
                    }
                }
                    
                //Column Winner
                else if (playingBoard[j][i] === symbol && playingBoard[j+1][i] === symbol && playingBoard[j+2][i] === symbol){
                console.log(`Player ${user} wins with ${symbol}`);
                let restart = prompt('Would you like to play again? Y/N');
                    if(restart === 'Y'){
                    playingBoard = startBoard();
                    player1.movement();
                    }
                    else{
                    console.log(playingBoard);
                    }
                }
            }

        }

    return{
        startBoard: startBoard,
        currentBoard: currentBoard
    };
}) ();

const movement = [];
let playerNumberOne = 1;
let playerNumberTwo = 2;


function turn(event) {
    // document.addEventListener("click", function(event) {
    if (event.target.classList.contains("cell")) {
        if(movement.length === 0){
            movement.push(1);
            console.log(movement);
            let playerSymbol = "X";
            event.target.innerHTML = playerSymbol;
            let selectedRow = event.target.dataset.row;
            let selectedColumn = event.target.dataset.column;
            console.log(`Player number ${playerNumberOne} has selected the row ${selectedRow} and column ${selectedColumn}`);
            gameBoard.currentBoard(playerNumberOne, selectedRow,selectedColumn,playerSymbol);
            }
        else if (movement[(movement.length)-1] != 1){
            movement.push(1);
            console.log(movement);
            let playerSymbol = "X";
            event.target.innerHTML = playerSymbol;
            let selectedRow = event.target.dataset.row;
            let selectedColumn = event.target.dataset.column;
            console.log(`Player number ${playerNumberOne} has selected the row ${selectedRow} and column ${selectedColumn}`);
            gameBoard.currentBoard(playerNumberOne, selectedRow,selectedColumn,playerSymbol);
            }

        else if (movement[(movement.length)-1] === 1){
            movement.push(2);
            console.log(movement);
            let playerSymbol = "O";
            event.target.innerHTML = playerSymbol;
            let selectedRow = event.target.dataset.row;
            let selectedColumn = event.target.dataset.column;
            console.log(`Player number ${playerNumberTwo} has selected the row ${selectedRow} and column ${selectedColumn}`);
            gameBoard.currentBoard(playerNumberTwo, selectedRow,selectedColumn,playerSymbol);
            }
        }
    }
document.addEventListener("click", turn);

//Create users 
function player(user,symbol){
    return {
        user: user,
        symbol: symbol,
        movement: function(){
            let row = selectedRow;
            console.log(row);          
            gameBoard.currentBoard(user, row,cell,symbol);
            console.log(`Player ${user} chose row ${row} and cell ${cell}`);
        },
    }
}






//     //Alternating turns
//     if (movement.length === 0) {
//         movement.push(playerNumberOne);
//         console.log(playerNumberOne);
//         document.addEventListener("click", function(event) {
//             // Only change the innerHTML if the clicked element has the class "cell"
//             if (event.target.classList.contains("cell") ) {
//                 let playerSymbol = "X";
//                 event.target.innerHTML = playerSymbol;
//                 let selectedRow = event.target.dataset.row;
//                 let selectedColumn = event.target.dataset.column;
//                 console.log(`Player number ${playerNumberOne} has selected the row ${selectedRow} and column ${selectedColumn}`);
//                 gameBoard.currentBoard(playerNumberOne, selectedRow,selectedColumn,playerSymbol);
//             }
//         });
//     }
//     else if (movement[(movement.length) - 1] === 1) {
//         let playerNumberTwo = 2;
//         console.log(playerNumberTwo);
//         document.addEventListener("click", function(event) {
//             // Only change the innerHTML if the clicked element has the class "cell"
//             if (event.target.classList.contains("cell")) {
//                 let playerSymbol = "O";
//                 event.target.innerHTML = playerSymbol;
//                 let selectedRow = event.target.dataset.row;
//                 let selectedColumn = event.target.dataset.column;
//                 console.log(`Player number ${playerNumberTwo} has selected the row ${selectedRow} and column ${selectedColumn}`);
//                 gameBoard.currentBoard(playerNumberTwo, selectedRow,selectedColumn,playerSymbol);
//             }
//         });
//     }
//     else {
//         movement.push(playerNumberOne);
//         console.log(playerNumberOne);
//         document.addEventListener("click", function(event) {
//             // Only change the innerHTML if the clicked element has the class "cell"
//             if (event.target.classList.contains("cell")) {
//                 let playerSymbol = "X";
//                 event.target.innerHTML = playerSymbol;
//                 console.log(event.target.dataset.row);
//                 let selectedRow = event.target.dataset.row;
//                 let selectedColumn = event.target.dataset.column;
//                 console.log(`The else statement: Player number ${playerNumberOne} has selected the row ${selectedRow} and column ${selectedColumn}`);
//                 gameBoard.currentBoard(playerNumberOne, selectedRow,selectedColumn,playerSymbol);
//             }
//         });
//     }
// }



// function turn() {
//     console.log(movement);
//     //Alternating turns
//     if (movement.length === 0) {
//         movement.push(playerNumberOne);
//         console.log(playerNumberOne);
//         document.addEventListener("click", function(event) {
//             // Only change the innerHTML if the clicked element has the class "cell"
//             if (event.target.classList.contains("cell") ) {
//                 let playerSymbol = "X";
//                 event.target.innerHTML = playerSymbol;
//                 let selectedRow = event.target.dataset.row;
//                 let selectedColumn = event.target.dataset.column;
//                 console.log(`Player number ${playerNumberOne} has selected the row ${selectedRow} and column ${selectedColumn}`);
//                 gameBoard.currentBoard(playerNumberOne, selectedRow,selectedColumn,playerSymbol);
//             }
//         });
//     }
//     else if (movement[(movement.length) - 1] === 1) {
//         let playerNumberTwo = 2;
//         console.log(playerNumberTwo);
//         document.addEventListener("click", function(event) {
//             // Only change the innerHTML if the clicked element has the class "cell"
//             if (event.target.classList.contains("cell")) {
//                 let playerSymbol = "O";
//                 event.target.innerHTML = playerSymbol;
//                 let selectedRow = event.target.dataset.row;
//                 let selectedColumn = event.target.dataset.column;
//                 console.log(`Player number ${playerNumberTwo} has selected the row ${selectedRow} and column ${selectedColumn}`);
//                 gameBoard.currentBoard(playerNumberTwo, selectedRow,selectedColumn,playerSymbol);
//             }
//         });
//     }
//     else {
//         movement.push(playerNumberOne);
//         console.log(playerNumberOne);
//         document.addEventListener("click", function(event) {
//             // Only change the innerHTML if the clicked element has the class "cell"
//             if (event.target.classList.contains("cell")) {
//                 let playerSymbol = "X";
//                 event.target.innerHTML = playerSymbol;
//                 console.log(event.target.dataset.row);
//                 let selectedRow = event.target.dataset.row;
//                 let selectedColumn = event.target.dataset.column;
//                 console.log(`The else statement: Player number ${playerNumberOne} has selected the row ${selectedRow} and column ${selectedColumn}`);
//                 gameBoard.currentBoard(playerNumberOne, selectedRow,selectedColumn,playerSymbol);
//             }
//         });
//     }
// }