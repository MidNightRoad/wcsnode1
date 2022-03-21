
let person = require('./information.js')
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello , my name is ${person.name}`,
    e : `I'm student a Wild Code School ${person.wcsCity}`,
    T : "Comment my work with It's Britney Bitch "
}));
