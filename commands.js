// Uses the rgb values entered by the user to set an appropriate
// background color of the textarea.
function setColor() {
    var check = false;
    var r = document.getElementById('Red').value;
    var g = document.getElementById('Green').value;
    var b = document.getElementById('Blue').value;
    var all = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("mytextarea").style.backgroundColor = all;
}

// Checks the red input field for boundary values.
function correctRed() {
    var r = document.getElementById('Red').value;
    if (r < 0) {
        alert("Value of red input cannot be less than 0.")
        document.getElementById('Red').value = "";
    }
    else if (r > 255) {
        alert("Value of red input cannot be more than 255.")
        document.getElementById('Red').value = "";
    }
}

// Checks the green input field for boundary values.
function correctGreen() {
    var g = document.getElementById('Green').value;
    if (g < 0) {
        alert("Value of red input cannot be less than 0.")
        document.getElementById('Green').value = "";
    }
    else if (g > 255) {
        alert("Value of red input cannot be more than 255.")
        document.getElementById('Green').value = "";
    }
}

// Checks the blue input field for boundary values.
function correctBlue() {
    var b = document.getElementById('Blue').value;
    if (b < 0) {
        alert("Value of red input cannot be less than 0.")
        document.getElementById('Blue').value = "";
    }
    else if (b > 255) {
        alert("Value of red input cannot be more than 255.")
        document.getElementById('Blue').value = "";
    }
}

// Changes the text in the textarea to bold.
function bold() {
    var object = document.getElementById("mytextarea");
    if( object.style.fontWeight == "bold" ) {
        object.style.fontWeight = "normal";
    }
    else {
        object.style.fontWeight = "bold";
    }
}

// Changes the text in the textarea to italic.
function italic() {
    var object = document.getElementById("mytextarea");
    if( object.style.fontStyle == "italic" ) {
        object.style.fontStyle = "normal";
    }
    else {
        object.style.fontStyle = "italic";
    }
}

// Changes the text in the textarea to undeline.
function underline() {
    var object = document.getElementById("mytextarea");
    if( object.style.textDecoration == "underline" ) {
        object.style.textDecoration = "initial";
    }
    else {
        object.style.textDecoration = "underline";
    }
}

// Changes the text in the textarea to the color green.
function changeGreen() {
    var object = document.getElementById("mytextarea");
    if ( object.style.color == "green" ) {
        object.style.color = "initial";
    }
    else {
        object.style.color = "green";
    }
}

// Changes the text to the textarea to the color blue.
function changeBlue() {
    var object = document.getElementById("mytextarea");
    if ( object.style.color == "blue" ) {
        object.style.color = "initial";
    }
    else {
        object.style.color = "blue";
    }
}

// Changes the text in the textarea to the color red.
function changeRed() {
    var object = document.getElementById("mytextarea");
    if ( object.style.color == "red" ) {
        object.style.color = "initial";
    }
    else {
        object.style.color = "red";
    }
}

// Changes the text in the textarea to the color yellow.
function changeYellow() {
    var object = document.getElementById("mytextarea");
    if ( object.style.color == "yellow" ) {
        object.style.color = "initial";
    }
    else {
        object.style.color = "yellow";
    }
}

// Changes the text in the textare to the font 'cursive'.
function changeCursive() {
    var object = document.getElementById("mytextarea");
    if ( object.style.fontFamily == "cursive" ) {
        object.style.fontFamily = "initial";
    }
    else {
        object.style.fontFamily = "cursive";
    }
}

// Changes the text in the textarea to the font 'fantasy'.
function changeFantasy() {
    var object = document.getElementById("mytextarea");
    if ( object.style.fontFamily == "fantasy" ) {
        object.style.fontFamily = "initial";
    }
    else {
        object.style.fontFamily = "fantasy";
    }
}

// Changes the text in the textarea to the font 'serif'.
function changeSerif() {
    var object = document.getElementById("mytextarea");
    if ( object.style.fontFamily == "serif" ) {
        object.style.fontFamily = "initial";
    }
    else {
        object.style.fontFamily = "serif";
    }
}

// Changes the text in the textarea to the font 'sans-serif'.
function changeSansSerif() {
    var object = document.getElementById("mytextarea");
    if ( object.style.fontFamily == "sans-serif" ) {
        object.style.fontFamily = "initial";
    }
    else {
        object.style.fontFamily = "sans-serif";
    }
}