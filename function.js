//Types of defining functions
// function add(a, b){
//     return a + b;
// };

// var add = function(a, b){
//     return a + b;
// }

// var add = (a, b) => {
//     return a + b;
// }

var add = (a, b) => a+b;

var res = add(5, 5);

console.log("RESULT: ", res);

//default function:
(function() {
    console.log("Vaidehi Bhandarkar");
})(); //last () is the indication to call the function

