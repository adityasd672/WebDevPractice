let fvalue = parseInt(document.querySelector("#fvalue").value);
let svalue = parseInt(document.querySelector("#svalue").value);

let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".sub");
let multBtn = document.querySelector(".mult");
let divBtn = document.querySelector(".div");
let modBtn = document.querySelector(".mod");

addBtn.addEventListener("click",add());
subBtn.addEventListener("click",sub());

function add() {
    let result = fvalue + svalue;
    document.getElementById('result').innerHTML = "Result : "+result;
}
function sub() {
    let result = fvalue - svalue;
    document.getElementById('result').innerHTML = "Result : "+result;
}
function mult() {
    let result = fvalue * svalue;
    document.getElementById('result').innerHTML = "Result : "+result;
}
function div() {
    let result = fvalue / svalue;
    document.getElementById('result').innerHTML = "Result : "+result;
}
function mod() {
    let result = fvalue % svalue;
    document.getElementById('result').innerHTML = "Result : "+result;
}

