// VARS
let easyNum = 3;
let hardNum = 9;
let colorAmt = hardNum;
// array of colors to be randomized
let colors = [];

// SELECTORS
//select all .square class divs
let squares = document.querySelectorAll(".square");

//set color to be "correct"
let pickedColor = pickColor();

//select rgb code span
let colorDisplay = document.getElementById("colorDisplay");

//select result message
let messageDisplay = document.querySelector("#message");

// select h1 for changing bg color upon win
let h1 = document.querySelector("h1");

// select reset button
let refresh = document.querySelector("#refresh");

//select difficulty buttons
let modeBtns = document.querySelectorAll(".mode");

resetColors();

// EVENT LISTENERS
for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function () {
        // when this button is clicked, remove the style from both then add it to the one we clicked
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");

        //how many squares to show
        if (this.textContent === "Easy")
            colorAmt = easyNum;
        else
            colorAmt = hardNum;

        resetColors();
    });
}

// reset button functionality
refresh.addEventListener("click", resetColors);

//call reset to init the game at the beginning


// FUNCTIONS

function resetColors() {
    //new array of colors
    colors = generateRandomColors(colorAmt);
    //new correct color
    pickedColor = pickColor();
    //display rgb code
    colorDisplay.textContent = pickedColor;
    //update squares display
    squareColorInit();

    h1.style.backgroundColor = "#e6e1dc"
    messageDisplay.textContent = " ";
    refresh.textContent = "New Colors";
}

//pre: colors array filled
function squareColorInit() {
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            //set each square to have its own corresponding color from colors[]
            squares[i].style.backgroundColor = colors[i];
            // add click listeners to squares
            squares[i].addEventListener("click", squareClicked);
        }
        else {
            squares[i].style.display = "none";
        }

    }
}

function squareClicked() {
    // get color of the clicked square
    let clickedColor = this.style.backgroundColor;
    // alert(clickedColor);

    // compare to pickedColor
    if (pickedColor === clickedColor) {
        messageDisplay.textContent = "Correct!";
        correctColors(pickedColor);
        h1.style.background = pickedColor;
        //new Colors --> play again
        refresh.textContent = "Play Again";
    }
    else {
        // wrong color = color dissapears
        this.style.backgroundColor = "#f7f2e7"
        messageDisplay.textContent = "Try Again!";
    }
}

function correctColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//get an array index that will be "correct"
function pickColor() {
    let rando = Math.floor(Math.random() * colors.length);
    return colors[rando];
}

function generateRandomColors(x) {
    // make an Array
    let arr = [];
    // add x random colors to the array
    for (let i = 0; i < x; i++) {
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor() {
    // get random color and push into array
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let string = "rgb(" + r + ", " + g + ", " + b + ")";
    return string;
}
