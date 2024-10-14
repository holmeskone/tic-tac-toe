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



//Create users 
function player(user,symbol){
    const movements = [];
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

