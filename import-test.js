var note = require("./notes.js");
var _ = require('lodash');

var res = note.age;
console.log("AGE: ", res);

var ans = note.add(res, 10);
console.log("NEW AGE: ", ans);

var arr = ['per', 'per', 1, 2, 4, 1, 'V', false];
console.log(_.uniq(arr));
console.log(_.isString('v'));
