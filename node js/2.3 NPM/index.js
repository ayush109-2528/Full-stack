// var generateName = require('sillyname');
import generateName  from 'sillyname'; // ES6 import syntax
// const generateName = require('sillyname'); // CommonJS require syntax
import superheroes from 'superheroes'; // ES6 import syntax
var sillyName = generateName();
console.log(sillyName); // 'happy turtle'
var mySuperHero = superheroes(); // ES6 import syntax
console.log(mySuperHero);