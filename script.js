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
    
    function currentBoard(user,row,cell,symbol){
        if(playingBoard[row][cell]!=''){
            console.log('Cell already taken');
        }
        else if (winnerChecker === 'Winner'){
            playingBoard = startBoard()
        }
        else{
            playingBoard[row][cell]=(symbol);
            console.log(playingBoard);
        }
        winnerChecker(user, symbol);
    }

    function winnerChecker(user, symbol){
        let j = 0;
        let i = 0;
        //Diagonal Winner
        if (playingBoard[j][j] === symbol && playingBoard[j+1][j+1] === symbol && playingBoard[j+2][j+2] === symbol){
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

// function turn(){
//     const player1 = player(1,'X');
//     const player2 = player(2,'O');
//     const movements = [];

//     const cells = document.querySelectorAll('[data-row][data-column]');
    
//     cells.forEach(cell => {
//         cell.addEventListener('click', function() {
//             // Get the row and column data attributes for the clicked cell
//             let selectedRow = cell.getAttribute('data-row');
//             let selectedColumn = cell.getAttribute('data-column');

//             if(movements.length === 0){
//                 player1.movement();
//             }
//             else if(movements[(movements.length-1)] === 1){
//                 player2.movement();
//             }
//             else{
//                 player1.movement();
//             }
            
//             // Log the selected row and column
//             console.log(`Player  chose row ${selectedRow} and column ${selectedColumn}`);
            
//             // Use the selected row and column inside the event listener
//             let row = selectedRow;
//             console.log(row);
//         });
//     });
// }


//Create users 
function player(user,symbol){
    // const movements = [];
    // if(movements.length === 0){
    //     // player1.movement();
    // }
    // else{
    //     // player2.movement();
    // }
    return {
        user: user,
        symbol: symbol,
        movement: function(){
            let row = prompt('What row?');
            let cell = prompt('What cell?');            
            gameBoard.currentBoard(user, row,cell,symbol);
            console.log(`Player ${user} chose row ${row} and cell ${cell}`);
            histMovements = movements.push(user);
            console.log(histMovements);
        },
    }
}


    const player1 = player(1,'X');
    const player2 = player(2,'O');