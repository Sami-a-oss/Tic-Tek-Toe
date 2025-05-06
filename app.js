let playerO = 0;
let playerX = 0;
const output = document.querySelector("#output");
const outputContainer = document.querySelector(".lastLauout");
const player1 = document.querySelector("#PlayerO");
const player2 = document.querySelector("#PlayerX");

const boxes = document.querySelectorAll(".box");
let turnO = true;

let winPattens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const boxDisable = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const printWinner = (first) => {
    if (first ==="O") {
        playerO++;
        player1.innerText = playerO;
    } else if(first === "X") {
        playerX++;
        player2.innerText = playerX;
    }
    output.innerText = `Player ${first} win!`;
    outputContainer.style.backgroundColor = "green";
    console.log("winner", first);
}

const checkWinner = () => {
    for (let patten of winPattens) {
        let first = boxes[patten[0]].innerText;
        let second = boxes[patten[1]].innerText;
        let third = boxes[patten[2]].innerText;
        if (first != "" && second != "" && third != "") {
            if (first === second && second === third) {
                boxDisable();
                printWinner(first);
                console.log("winner", second);
            }
        }
    }
}


boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});