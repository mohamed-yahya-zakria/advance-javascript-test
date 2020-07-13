"use strict";

// Objects

// 1.

const profileData = {
    name: "max",
    surname: "mustermann",
    age: 25,
    city: "Berlin"
}

// 2.

const convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}

console.log(Object.entries(convertObjectToArray));

// Arrays

// 1.

const originalArray = ["coffee", "tea", "juice"];

const convertArrayData = array => {
    array.splice(0, 2, array[1], array[0]);
    array.splice(2, 1, "milk");
    return array;
}

console.log(convertArrayData(originalArray));

// 2.

const createGrid = (num, content) => {
    let outputArray = [];

    for (let i = 0; i < num; i++) {
        outputArray[i] = [];
        for (let j = 0; j < num; j++) {
            outputArray[i].push(content);
        }
    }

    return outputArray;
}

console.log(createGrid(3, "*"));

// 3.

const wordArray = ["smart", "kind", "sweet", "small", "clear"];

const wordConverter = arr => {
    for (let i = 0; i < arr.length; i++) {
        let runArray = arr[i].split("");
        runArray.push("e");
        runArray.push("r");
        arr[i] = runArray.join("");
    }
    return arr;
}

console.log(wordConverter(wordArray));

// 4.

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

const calculateHours = arr => {
    return arr.reduce((acc, curr) => acc + (curr.end - curr.start), 0)
}

console.log(calculateHours(hourTracking));

// Classes

class Course {
    constructor(className, teacherName, classType, numStudents) {
        this.name = className;
        this.teacher = teacherName;
        this.type = classType;
        this.size = numStudents;
        this.spaceNeeded = function () {
            return `The classroom should be ${this.size * 2}m².`
        }
        this.details = function () {
            return `This is ${this.name}. A ${this.type} course taught by ${this.teacher}. There are ${this.size} students taking the course.`
        }
    }
}

const course = new Course("FbW 28", "Naqvi", "web development", 14);
console.log(course);

console.log(course.spaceNeeded());

console.log(course.details());

// Problem Solving

// 1.

const capitalizeFirstLetter = str => {
    let runArray = str.split(" ");
    runArray = runArray.map(word =>
        word.charAt(0).toUpperCase() + word.substr(1));
    return runArray.join(" ");
}

console.log(capitalizeFirstLetter("hey there"));

// 2.

const validPin = str => {
    let runArray = str.split("");

    if (runArray.length !== 4) {
        return false
    }

    if ((runArray[3] % 2) && !NaN) {
        return false
    }

    if (str.match(/^[0-9]+$/) === null) {
        return false
    }

    let reduced = runArray.reduce((acc, curr) => acc + parseInt(curr), 0);

    if (reduced / 4 == runArray[0]) {
        return false
    }

    if (reduced < 5) {
        return false
    }

    return true;
}

console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("wwww"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("1000"));
console.log(validPin("2224"));

// finished 12:09

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};