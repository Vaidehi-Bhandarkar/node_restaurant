const jsonString = '{"name": "vkb", "age": 25, "city": "abad"}';
const jsonObj = JSON.parse(jsonString);
console.log(typeof jsonObj);
console.log(jsonObj);

const jsonstr = JSON.stringify(jsonObj);
console.log(typeof jsonstr);
console.log(jsonstr);