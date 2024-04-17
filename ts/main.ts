window.onload = function() {
    let processBtn = document.getElementById("process") as HTMLButtonElement;
    processBtn.onclick = processClick;
}

/**
 * 
 * @returns a random number generated from 1 - 10, soon to be implemented
 */
function random():number {
    return 7;
}

/**
 * gives the user a random number when the button is clicked
 */
function processClick():void {
    alert(random());
}