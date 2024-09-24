
var n = "";
function getnumber(numbers) {
    n = n + numbers;
    console.log(n)
    document.getElementById('result').innerHTML = n

}
function getresult() {
    n = eval(n)
    document.getElementById('result').innerHTML = n

}
function getempty() {
    window.location = "calculator.html";
    document.getElementById('result').innerHTML = n

}
function getnegative() {
    if (n.length == 0) {

    }
}


