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
                initialBoard[i].push(['test'+i+j]);
        };
    };
    return initialBoard;
    }

    function currentBoard(text){
        let playingBoard = startBoard();
        playingBoard[1][1]=(text);
        console.log(playingBoard);
    }

    return{
        startBoard: startBoard,
        currentBoard: currentBoard
    };
}) ();


// const updatedBoard = gameBoard.currentBoard('nile');


//Create users
function player(user,symbol){
    return {
        user: user,
        symbol: symbol,
        movement: function(){
            let move = prompt('Enter a word');
            gameBoard.currentBoard(move);
        }
//     movement: function () {
//         let move = prompt('What is your move?');
//         console.log(`Your move is ${move}`)
// }
}
}
const player1 = player(1,'X');
player1.movement();



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