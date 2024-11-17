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

    //Create users 
    function player(user,symbol){
    return {
        user: user,
        symbol: symbol,}}

    let playingBoard = startBoard();
    const player1 = player(1,'X');
    const player2 = player(2,'O');
    
    function currentBoard(user,row,cell,symbol){
        if(playingBoard[row][cell]!=''){
            console.log('Cell already taken');
            return;
        }
        else{
            playingBoard[row][cell]=(symbol);
            const winnerStatus = winnerChecker(user,symbol);
            const startButton=document.getElementById("next-game");
            const cells = document.getElementsByClassName('cell');
            startButton.addEventListener('click', function(e){
            if (winnerStatus === 'Winner'){
                playingBoard = startBoard();
                console.log(playingBoard);
                let winnerArea = document.getElementById('winner-text');
                winnerArea.innerHTML = '';
                Array.from(cells).forEach(function(cell) {
                    cell.innerHTML = "";
                    cell.style.background = 'orange';
                    cell.style.color = 'black';
                });
            }
            })
            const restartButton=document.getElementById("restart");
            restartButton.addEventListener('click', function(e){
                if (winnerStatus === 'Winner'){
                    location.reload();}
                })
        }
    }
    

    function winnerChecker(user, symbol){
        let j = 0;
        let i = 0;

        //Diagonal Winner
        if (playingBoard[j][j] === symbol && playingBoard[j+1][j+1] === symbol && playingBoard[j+2][j+2] === symbol){
            document.getElementById('00').style.background = 'blue';
            document.getElementById('00').style.color = 'white';
            document.getElementById('11').style.background = 'blue';
            document.getElementById('11').style.color = 'white';
            document.getElementById('22').style.background = 'blue';
            document.getElementById('22').style.color = 'white';
            let winnerArea = document.getElementById('winner-text');
            winnerArea.innerHTML = (`Player ${user} wins with ${symbol}`);
            let WinnerUser = Number(`${user}`);
            console.log(typeof(WinnerUser));
            updateText(WinnerUser);
        return "Winner";
        }
        //Another diagonal sequence that wins
        else if (playingBoard[j+2][j] === symbol && playingBoard[j+1][j+1] === symbol && playingBoard[j][j+2] === symbol){
            document.getElementById('20').style.background = 'blue';
            document.getElementById('20').style.color = 'white';
            document.getElementById('11').style.background = 'blue';
            document.getElementById('11').style.color = 'white';
            document.getElementById('02').style.background = 'blue';
            document.getElementById('02').style.color = 'white';
            let winnerArea = document.getElementById('winner-text');
            winnerArea.innerHTML = (`Player ${user} wins with ${symbol}`);
            let WinnerUser = Number(`${user}`);
            console.log(typeof(WinnerUser));
            updateText(WinnerUser);
        return "Winner";
        }
        // A draw!
        else if(playingBoard[j][i] !='' && playingBoard[j+1][i+1] !='' && playingBoard[j+2][i+2] !='' &&
            playingBoard[j+1][i] !='' && playingBoard[j+1][i+1] !='' && playingBoard[j+1][i+2] !='' &&
            playingBoard[j+2][i] !='' && playingBoard[j+2][i+1] !='' && playingBoard[j+2][i+2] !=''){
            console.log(`It's a draw!`)
            let winnerArea = document.getElementById('winner-text');
            winnerArea.innerHTML = (`It's a draw!`);
            let WinnerUser = 'none';
            updateText(WinnerUser);
            return "Winner";
            }

        for(i = 0; i<3; i++){
                //Row Winner
                if(playingBoard[i][j] === symbol && playingBoard[i][j+1] === symbol && playingBoard[i][j+2] === symbol){
                    document.getElementById(`${i}${j}`).style.background = 'blue';
                    document.getElementById(`${i}${j}`).style.color = 'white';
                    document.getElementById(`${i}${j+1}`).style.background = 'blue';
                    document.getElementById(`${i}${j+1}`).style.color = 'white';
                    document.getElementById(`${i}${j+2}`).style.background = 'blue';
                    document.getElementById(`${i}${j+2}`).style.color = 'white';
                    let winnerArea = document.getElementById('winner-text');
                    winnerArea.innerHTML = (`Player ${user} wins with ${symbol}`);
                    let WinnerUser = Number(`${user}`);
                    console.log(typeof(WinnerUser));
                    updateText(WinnerUser);
                    return "Winner";
                }
                    
                //Column Winner
                else if (playingBoard[j][i] === symbol && playingBoard[j+1][i] === symbol && playingBoard[j+2][i] === symbol){
                    document.getElementById(`${j}${i}`).style.background = 'blue';
                    document.getElementById(`${j}${i}`).style.color = 'white';
                    document.getElementById(`${j+1}${i}`).style.background = 'blue';
                    document.getElementById(`${j+1}${i}`).style.color = 'white';
                    document.getElementById(`${j+2}${i}`).style.background = 'blue';
                    document.getElementById(`${j+2}${i}`).style.color = 'white';
                    console.log(`Player ${user} wins with ${symbol}`);
                    let winnerArea = document.getElementById('winner-text');
                    winnerArea.innerHTML = (`Player ${user} wins with ${symbol}`);
                    let WinnerUser = Number(`${user}`);
                    console.log(typeof(WinnerUser));
                    updateText(WinnerUser);
                    return "Winner";
                }
            }

        function updateText(user) {
            let winnerPlayerOne = document.querySelector(`#player-1 span`);
            let winnerPlayerTwo = document.querySelector(`#player-2 span`);
            let noWinner = document.querySelector(`#tie span`);
            if(user===1){
                console.log('Winner is 1')
                winnerPlayerOne.innerHTML = countPlayerOne; // Set innerHTML to the current count
                countPlayerOne++;          // Increment the count
            }
            else if (user===2) {
                console.log('Winner is 2')
                winnerPlayerTwo.innerHTML = countPlayerTwo; // Set innerHTML to the current count
                countPlayerTwo++;          // Increment the count
            }
            else if (user='none') {
                console.log(`It's a tie`)
                noWinner.innerHTML = countTie; // Set innerHTML to the current count
                countTie++;          // Increment the count
            }
        }
    }


    const movement = [];
    let countPlayerOne = 1;
    let countPlayerTwo = 1;
    let countTie = 1;
    let playerNumberOne = 1;
    let playerNumberTwo = 2;
        
        
    function turn(event) {
        // document.addEventListener("click", function(event) {
        if ((event.target.classList.contains("cell")) && (event.target.innerHTML === '')) {
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
    return{
        startBoard: startBoard,
        player:player,
        currentBoard: currentBoard, 
        winnerChecker: winnerChecker,
        turn: turn,
    };
}) ();


