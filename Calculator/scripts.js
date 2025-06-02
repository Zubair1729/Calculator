let disp2 = document.getElementById("disp2");
let disp1 = document.getElementById("disp1");
let numArr = "";
let expArr = "";
let n;
let count = true;
let euse = false;
let res;
function isNum(num) {
    if (num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 7 || num == 8 || num == 9) {
        return true;
    }
    else {
        return false;
    }
}
function Calculate() {

    let total = expArr + numArr;
    disp1.value = total;
    let las = total.length - 1;
    let ntotal = "";
    console.log(disp1.value);
    console.log(total);

    if (isNum(total[las])) {
        res = eval(total);
        console.log(res);
    }
    else {
        for (let i = 0; i < las; i++) {
            ntotal += total[i];
        }
        res = eval(ntotal);
        console.log(ntotal);
        console.log(res);
    }

    disp2.value = res;
    disp1.value += "=";
    console.log(disp1.value);
    numArr = "";
    console.log("numArr is ", numArr);
    console.log("expArr is ", expArr);
    euse = true;
}
function numChange(num) {
    n = num;
    numArr += `${num}`;
    disp2.value = Number(numArr);
    console.log("numArr is ", numArr);
    console.log("disp2 is ", disp2.value);
    console.log();
    count = true;


}

function opeArr(op) {

    if (count) {
        expArr += numArr + `${op}`;

        disp1.value = expArr;
        numArr = "";

        console.log();
        console.log("expArr is ", expArr)
        console.log("disp2 is ", disp2.value);

        count = false;
    }
}
function remove() {
    numArr = "";
    expArr = "";
    disp1.value = "";
    disp2.value = 0;
    console.log(disp2.value);
    console.log("C clicked total clear ")
}
function del() {
    if (numArr != "") {
        numArr = (numArr - n) / 10;
        disp2.value = Number(numArr)
        console.log("numArr is ", numArr);
    }
}
