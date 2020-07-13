// Answer Sheet - all answers should go here 

'use strict';
//Objects
//1 Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.

const profileData = {
    name: "Elena",
    surname: "Riemer",
    age: 31,
    city: "Berlin"
}
console.log("Task 1:");
console.log(profileData);


//2 Convert an object into a nested array of key pair values.
const convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}

const answer = Object.entries(convertObjectToArray);
console.log("\nTask 2:");
console.log(answer);

//Arrays
//1
/* Create a function named "convertArrayData". Use array methods to manipulate the data the array below. The first two items in the array should switch positions and the third item should be replaced by a new item. Change the data to get the result below. Print your solution to the console.*/

const drinks = ["coffee", "tea", "juice"];

function convertArrayData(arr) {
    arr.pop();
    [arr[0], arr[1]] = [arr[1], arr[0]];
    arr.push("milk");
    return arr;
}
console.log("\nTask 3: ");
console.log(convertArrayData(drinks)); //["tea", "coffee", "milk"];


//2
function createGrid(size, char) {
    const newArr = [];
    for (let i = 0; i < size; i++) {
        const newArrNested = [];
        for (let j = 0; j < size; j++) {
            newArrNested.push(char);
        }
        newArr.push(newArrNested);
        //newArrNested.push(" ");
    }
    return newArr;
}
console.log("\nTask 4:");
console.log(createGrid(3, "*"));


//3
function wordConverter(arr) {
    return arr.map(element => element + "er");
}

const words = ["smart", "kind", "sweet", "small", "clear"];
console.log("\nTask 5:");
console.log(wordConverter(words));


//4
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

function calculateHours(obj) {
    let total = 0;
    for (let i = 0; i < Object.keys(obj).length; i++) {
        total += hourTracking[i]["end"] - hourTracking[i]["start"];
    }
    return total;
}

console.log("\nTask 6:");
console.log(calculateHours(hourTracking));

//Classes

class Course {
    constructor(teacher, course, numberOfStudents) {
        this.teacher = teacher;
        this.course = course;
        this.numberOfStudents = numberOfStudents;
        this.spaceNeeded = function () {
            let room = this.numberOfStudents * 2;
            return console.log(`The classroom should be ${room}m².`);
        }
        this.details = function () {
            return console.log(`This is a ${this.course} course taught by ${this.teacher}. There are ${this.numberOfStudents} students taking the course.`);
        }
    }
}

const course = new Course('John', "web development", 22);
console.log("\nTask 7:");
course.spaceNeeded(); //`The classroom should be 44m².`

course.details();
//`This is a web development course taught by John. There are 22 students taking the course.` */


// Problem Solving

function capitalizeFirstLetter(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log("\n Task 8:");
console.log(capitalizeFirstLetter("hey there"));


/* //Validation
function validPin(pin) {
    if ((pin.match(/^[0-9] +$/) !== null) && (pin.length >= 4) && (pin.slice(-1) % 2 === 0)) {
        let numberType = parseInt(str);
        let sum = 0;
        for (let i = 0; i <= 4; i++) {
            sum += i;
                    }
    }
} */



// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {
    profileData,
    convertObjectToArray,
    convertArrayData,
    createGrid,
    wordConverter,
    calculateHours,
    Course,
    capitalizeFirstLetter,
    validPin
};