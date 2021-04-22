#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)

for(let i=0;i<numbers.length;i++)   {
    if(numbers[i].indexOf('@')){
            
        if(numbers[i].indexOf('@')!=-1){
            let indexop=numbers[i].indexOf('@')
            let muli=numbers[i].slice(indexop+1,numbers[i].length)
                
            if(muli<1) {
                console.log("Some arguments are not numbers!");
                process.exit(1);
            }
            
            let muln=numbers[i].slice(0,indexop)
            numbers.splice(i,1);
            i--;
            for(let j=0;j<muli;j++)
                numbers.push(muln);  
        }   
    }
}
if (numbers.some((n) => isNaN(n))) {
   
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "min":
        result = lib.min(numbers);
        break;
    case "med":
        result = lib.med(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);
