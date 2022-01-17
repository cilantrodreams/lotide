const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 2);
assertEqual(tail([34]).length, 0);
assertEqual(tail([]).length, 0);
assertEqual(tail(["Hello", "World", "Lighthouse Labs"])[0], "World");
assertEqual(tail(["Hello", "World", "Lighthouse Labs"])[1], "Lighthouse Labs");