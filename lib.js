function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function min(numbers) {
    return numbers.reduce((min, curr) => (min > curr ? curr : min), numbers[0]);
}

function med(numbers)   {
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
