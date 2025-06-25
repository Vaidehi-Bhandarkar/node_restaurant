//Different methods for callback functions


// function callback(){
//     console.log("Callback function call");
// }
// add(2, 3, callback);

const add = (a, b, callback) => {
    var res = a + b;
    console.log("RESULT: ", res);
    callback();
}

// add(2, 3, function(){
//     console.log("Callback function call");
// });

add(2, 3, () => {console.log("Callback function call");})