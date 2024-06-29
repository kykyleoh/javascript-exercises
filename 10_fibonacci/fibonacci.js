const fibonacci = function(pos) {
    pos = parseInt(pos);

    if (pos < 0) {return "OOPS"};
    if (pos == 0) {return 0};
    if (pos > 0 && pos < 3) {return 1};

    let fibArray = [1, 1];
    let curVal;
    for (let i=2; i<pos; i++) {
        curVal = fibArray[i-1] + fibArray[i-2];
        fibArray.push(curVal);
    }
    return curVal;
};

// Do not edit below this line
module.exports = fibonacci;
