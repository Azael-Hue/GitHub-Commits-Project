window.onload = function () {
    let processBtn = document.getElementById("process");
    processBtn.onclick = processClick;
};
function random() {
    return 7;
}
function processClick() {
    alert(random());
}
