function oper(numbers)  {
    
    

    for(let i=0;i<numbers.length;i++)   {
        if(typeof(numbers[i])=="string"){
            if(numbers[i].indexOf('@')){
                    
                if(numbers[i].indexOf('@')!=-1){
                    let indexop=numbers[i].indexOf('@')
                    let muli=numbers[i].slice(indexop+1,numbers[i].length)
                        
                    if(muli<1) {
                        console.log("Invalid repeat!");
                        process.exit(1);
                    }
                    muli=muli*1;
                    if(!Number.isInteger(muli)){
                        console.log("Invalid repeat!");
                        process.exit(1);
                    }
            
                    let muln=numbers[i].slice(0,indexop)
                    numbers.splice(i,1);
            
                    for(let j=0;j<muli;j++)
                        numbers.push(muln);  
                }   
            }
        }
    }
    return numbers.map((n) => parseFloat(n));
}

function sum(numbers) {
    numbers=oper(numbers);
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    numbers=oper(numbers);
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    numbers=oper(numbers);
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function min(numbers) {
    numbers=oper(numbers);
    return numbers.reduce((min, curr) => (min > curr ? curr : min), numbers[0]);
}

function med(numbers)   {
    numbers=oper(numbers);
    numbers.sort();
    if(numbers.length%2==1) {
        return numbers[(numbers.length)/2-0.5];
    }
    else {
        return (numbers[numbers.length/2-1]+numbers[numbers.length/2])/2;
    }
    
}

module.exports = {
    sum,
    avg,
    max,
    min,
    med
};