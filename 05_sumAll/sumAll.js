const sumAll = function(start, end) {
    let newSum = 0;    
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    };
    for (let i=start; i<=end; i++) {
        newSum += i;
    };
    return newSum;
};

// Do not edit below this line
module.exports = sumAll;
