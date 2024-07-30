import greet from './greet.js';
import yo from './yo.js';
import { addition } from './sum.js'; 
import chalk from 'chalk';   
import cowsay from "cowsay";

import  figlet  from 'figlet';

 figlet("AWE BROER",  function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});



console.log(addition(3, 88));
console.log(greet('Wise'));
console.log(yo("Amu"));

/* const  styledMessage = chalk.bgOrange.whiteBright(greet("Amu")); */ 

console.log(chalk.bgRed.whiteBright(greet("Amu")));
/* var figlet = require("figlet"); */




console.log(cowsay.say({
    text : "Bona ngi zoku enzani",
    e : "oO",
    T : "U "
}));    





