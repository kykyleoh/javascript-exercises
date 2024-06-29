const getTheTitles = function(arr) {
    let returnArray = [];
    for (let i of arr) {
        returnArray.push(i['title']);
    }
    return returnArray;
};

// Do not edit below this line
module.exports = getTheTitles;
