function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result", num);
}
printResult(add(2, 4));
// Function as a type
var addNumber1;
// Function Types and Callback
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(20, 20, function (result) {
    console.log(result);
    return true;
});
