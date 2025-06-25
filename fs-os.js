var fs = require('fs');
var os = require('os');

//Check user
var user = os.userInfo();
console.log(user);
console.log(user.username);

//Create or append file
fs.appendFile('greetings.txt', 'Hi ' + user.username + '!\n', () => {
    console.log("File created");
});

console.log(fs);