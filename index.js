//My first Javascript code
//document.getElementById("count-el").innerText=115;

//let myAge = 50;
//console.log(myAge);

//let firstBatch = 5;
//let secondBatch = 7;
//let count = firstBatch + secondBatch;

let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count = count + 1;
    countEl.innerText = count;
    //document.getElementById("count-el").innerText=count;
}

function save() {
    let countStr = count + "-";
    let message = document.getElementById("message-el");
    message.textContent = countStr;
    count = 0;
}
//console.log(count);