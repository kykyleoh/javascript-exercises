const findTheOldest = function(arr) {
    let currOldest = {
        yearOfDeath: 1,
        yearOfBirth: 0,
    };
    
    let age, currOldestAge, deathYear;

    for (let person of arr) {
        deathYear = 'yearOfDeath' in person ? person['yearOfDeath'] : 2024;
        age = deathYear - person['yearOfBirth'];
        currOldestAge = ('yearOfDeath' in currOldest ? currOldest['yearOfDeath'] : 2024) - currOldest['yearOfBirth'];
        
        if (age >= currOldestAge) {
            currOldest = person;
        }
    }

    return currOldest;s
};

// Do not edit below this line
module.exports = findTheOldest;
