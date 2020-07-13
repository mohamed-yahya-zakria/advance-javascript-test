// Answer Sheet - all answers should go here 

'use strict';

//Objects

console.log('1. Key Pair Values:');

var profileData = {
    name: 'Pedro',
    surname: 'Rodrigues',
    age: '33',
    city: 'Berlin'
};
console.log(profileData);

console.log('2. Object to Array');

let convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
};

let arr = Object.entries(convertObjectToArray);
console.log(arr);

//Arrays

console.log('1. Data Manipulation');

let myDrinks = ["coffee", "tea", "juice"];

function convertArrayData(arr, a, b) {
    let output = arr[a];
    arr[a] = arr[b];
    arr[b] = output;

}
convertArrayData(myDrinks, 0, 1);
myDrinks[2] = 'milk';
console.log(myDrinks);

console.log('2. Create Grid');

function createGrid(size, char) {
    var print = [];
    for (var i = 0; i < size; i++) {
        print.push(new Array(size).fill(char));
    }
    return print;
}

console.log(createGrid(3, "*"));

console.log('3. Word Converter');

const wordConverter = (arr, str) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i] + str;

    }
    return result
}

console.log(wordConverter(["smart", "kind", "sweet", "small", "clear"], "er"))

console.log('4. Hour Calculation');

const hourTracking = [{
        day: 'Monday',
        start: 8,
        end: 17
    },
    {
        day: 'Tuesday',
        start: 9,
        end: 15
    },
    {
        day: 'Wednesday',
        start: 10,
        end: 18
    },
    {
        day: 'Thursday',
        start: 7,
        end: 14
    },
    {
        day: 'Friday',
        start: 6,
        end: 12
    },
];

function calculateHours() {
    var totalstart = hourTracking.reduce((accum, item) => accum + item.start, 0)
    var totalend = hourTracking.reduce((accum, item) => accum + item.end, 0)

    return (totalend - totalstart);
}

console.log(calculateHours());

//Classes


console.log('Classes');

class Course {
    constructor(teacher, course, number) {
        this.teacher = teacher,
            this.course = course,
            this.number = number
           
    }
    details() {
        return `This is a ${this.course} taught by ${this.teacher}.There are ${this.number} students taking the course.`
    }
    spaceNeeded() {
        return this.number *2 + 'm²';
    }
};
const fbw28 = new Course ('Naqvi', 'Web Development', 14);
console.log(fbw28);
console.log(fbw28.details());
console.log(fbw28.spaceNeeded());

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
//module.exports = {profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};