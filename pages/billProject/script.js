let total = 0;
let tax = 0;
let tip = 0;

let itemNames = [];
let itemPrices = [];

let result = 0;

// QUERY SELECTORS
let totalInput = document.querySelector("#subTotal");
totalInput.addEventListener("change", function () {
    total = Number(totalInput.value); //need to cast string to a number
    // reset();
});

let taxInput = document.querySelector("#tax");
taxInput.addEventListener("change", function () {
    tax = Number(taxInput.value);
});

let tipInput = document.querySelector("#tip");
tipInput.addEventListener("change", function () {
    tip = Number(tipInput.value);
});

//FUNCTIONS
// https://www.w3schools.com/howto/howto_js_todolist.asp
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        // div.style.display = "none"; //hides elem instead of deleting it
        div.remove();
    }
}

function removeItem(index) {
    itemNames.splice(index, 1);
    itemPrices.splice(index, 1);
}

//create a new list item when 'Add' is pressed
function newElement() {
    var li = document.createElement("li");  //creates list item HTML element
    //retrieve text from input boxes
    var nameInput = document.getElementById("foodName").value;
    var priceInput = document.getElementById("foodPrice").value;
    //store data in array
    itemNames.push(nameInput);
    itemPrices.push(Number(priceInput));

    //Format line of ul
    var text = document.createTextNode(nameInput + " ----- $" + priceInput); // makes text chunk with input string in it
    //add line to ul
    li.appendChild(text);

    //empty input validation
    // if (inputValue === '') {
    //     alert("You must write something!");
    //append li to the ul specified
    // } else {
    document.getElementById("items").appendChild(li);
    // }

    // set input box value to null?
    document.getElementById("foodName").value = "";
    document.getElementById("foodPrice").value = "";

    // <span class="close">X</span>
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); //x symbol
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            // console.log(i + " HERE 2");
            console.log(div.textContent);
            // div.style.display = "none"; //hides elem instead of deleting it
            div.remove();
            // removeItem(i);
        }
    }

}
/*
    1) total up their item cost
    2) get the ratio of their items to the total
    3) use that to get their portion of tax and tip (round up to nearest cent)

    Math.round(10*X)/10;     // round X to tenths

    TODO:
    make event listener for add item that recalculates and updates
        calculate()
            when item is deleted/added
            when total/tax/tip is updated

    'close' removes item from array

    input validation
*/
