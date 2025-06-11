var board = document.querySelectorAll(".tile");
var player = "X";

function checkDraw(){
    for(let i = 0; i < board.length; ++i){
        if(board[i].textContent === "") return false;
    }
    return true;
}


function checkWinner() {
    // Columns
    if (board[0].textContent && board[0].textContent === board[3].textContent && board[0].textContent === board[6].textContent) return board[0].textContent;
    if (board[1].textContent && board[1].textContent === board[4].textContent && board[1].textContent === board[7].textContent) return board[1].textContent;
    if (board[2].textContent && board[2].textContent === board[5].textContent && board[2].textContent === board[8].textContent) return board[2].textContent;
    // Rows
    if (board[0].textContent && board[0].textContent === board[1].textContent && board[0].textContent === board[2].textContent) return board[0].textContent;
    if (board[3].textContent && board[3].textContent === board[4].textContent && board[3].textContent === board[5].textContent) return board[3].textContent;
    if (board[6].textContent && board[6].textContent === board[7].textContent && board[6].textContent === board[8].textContent) return board[6].textContent;
    // Diagonals
    if (board[0].textContent && board[0].textContent === board[4].textContent && board[0].textContent === board[8].textContent) return board[0].textContent;
    if (board[2].textContent && board[2].textContent === board[4].textContent && board[2].textContent === board[6].textContent) return board[2].textContent;
    return false;
}


function gameplay(){
    if(this.textContent === ""){
        if(player == "X") this.classList.add("X");
        else this.classList.add("O");
        this.textContent = player;
        if(checkWinner()){
            document.querySelector("#currentplayer").textContent = `${checkWinner()} WINS!`;
            stopGame();
            return;
        }
        else if(checkDraw()){
            document.querySelector("#currentplayer").textContent = `DRAW!`;
            stopGame();
            return;
        }
        
        player = (player == "X") ? "O" : "X";
        document.querySelector("#currentplayer").textContent = `${player}'s turn`;
        
    }
}


function stopGame(){
    for(let i = 0; i < board.length; ++i){
        board[i].removeEventListener("click", gameplay);
    }
}


function startGame(){
    for(let i = 0; i < board.length; ++i){
        board[i].addEventListener("click", gameplay);
    }
}


document.querySelector(".restart").addEventListener("click", function (){
    for(let i = 0; i < board.length; ++i){
        board[i].textContent = "";
        board[i].classList.remove("X", "O");
    }
    document.querySelector("#currentplayer").textContent = `${player}'s turn`;
    startGame();
});

startGame();

