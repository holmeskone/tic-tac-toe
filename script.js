//IIFE to create newBoard

// const gameBoard = (function() { 
//     const rows = 3;
//     const columns = 3;
//     const initialBoard = [];

//     return {
//         newBoard: function (){
//             //Looping through to create our board
//             for (i=0; i<rows; i++){
//                 initialBoard[i] = [];
//                 for (j=0; j<columns; j++){
//                     initialBoard[i].push([j]);
//                 };
//             };
//             cleanSlate = initialBoard;
//             console.log(cleanSlate);      
//         }
//     };
// })();


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
    function currentBoard(user, row,cell,symbol){
        if(playingBoard[row][cell]!=''){
            console.log('Cell already taken');
        }
        else{
            playingBoard[row][cell]=(symbol);
        }
        console.log(playingBoard);
        winnerChecker(user, symbol);
    }

    function winnerChecker(user, symbol){
        let j = 0;
        //Diagonal Winner
        if (playingBoard[j][j] === symbol && playingBoard[j+1][j+1] === symbol && playingBoard[j+2][j+2] === symbol){
            console.log(`Player ${user} wins with ${symbol}`)
        }
        for(i = 0; i<3; i++){
                //Row Winner
                if(playingBoard[i][j] === symbol && playingBoard[i][j+1] === symbol && playingBoard[i][j+2] === symbol){
                    console.log(`Player ${user} wins with ${symbol}`)}
                //Column Winner
                else if (playingBoard[j][i] === symbol && playingBoard[j+1][i] === symbol && playingBoard[j+2][i] === symbol){
                console.log(`Player ${user} wins with ${symbol}`)
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
            // for (i=0; i<4; i++){
            //     if(this.user === 1){
            //         player2.turn();
            //         console.log(i);
            //         }
            //     else{
            //         player1.turn();
            //         console.log(i);
            //         }
            // }
        },
    }
}
const player1 = player(1,'X');
const player2 = player(2,'O');


// function movement(user, cell){
//     let row = [];
//     return {
//         user: user,
//         cell: cell,
//         selection: function (){
//             row.push(cell)
//             console.log(row.push(cell));
//         }
//     }
// }

// const user1 = player(1,'X');
// user1.create();
// const user2 = player(2,'O');
// user2.create();

// user3 = movement(1,1);
// user3.selection();