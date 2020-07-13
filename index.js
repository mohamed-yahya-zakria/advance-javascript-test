// Answer Sheet - all answers should go here 
"use strict";

// Q1
const profileData = {
    name: "Alejandra",
    surname: "Valencia",
    age: 29,
    city: "Berlin"
}
console.log(profileData);

// Q2.
const convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}

let array = Object.entries(convertObjectToArray);
console.log(array);

// Q3. ARRAYS 
let originalArray = ["coffee", "tea", "juice"];

function convertArrayData(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;

    originalArray.splice(2, 1, "milk");

}
convertArrayData(originalArray, 0, 1);
console.log(originalArray);


// Q4. GRID 
function createGrid (size, char) {
    let array = [];
    for (let i = 1; i <= size; i++){
        for (let j = 0; j < char; j++) {

        }
    }
}
// the grid is the only question that i got stuck on. i tried using a loop inside a loop, but i don't know how to continue

// Q5. WORD CONVERTER 
const arrayOfWord = ["smart", "kind", "sweet", "small", "clear"];

function wordConverter(array, end) {
    return array.map(word => `${word}${end}`);
}
console.log(wordConverter(arrayOfWord, "er"))


// Q6. HOURS CALC
const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];


// Q7. CLASSES
class Course {
    constructor(teacherName, isWebDev, howMany) {
        this.teacherName = teacherName;
        this.isWebDev = isWebDev;
        this.howMany = howMany;
    }
    spaceNeeded () {
        let space = this.howMany * 2;
        return `The classroom should be ${space}.`
    }
    details () {
        return `This is a ${this.isWebDev} course taught by ${this.teacherName}. There are ${this.howMany} students taking this course.`
    }
}
const newInfo = new Course(`John Smith`, "Web development", 22);
console.log(newInfo);
console.log(newInfo.spaceNeeded());
console.log(newInfo.details());

// Q8.

function capitalizeFirstLetter (string) {
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalizeFirstLetter("the quick brown fox"));
console.log(capitalizeFirstLetter("hey there"));

// Q9. Validation

function validPin (pin) {
    return typeof pin === "string" && !~pin.indexOf('.') && !isNaN(Number(pin)) && (pin[3] % 2 === 0) &&  (pin.length === 4 || pin.length === 6);
}
console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("wwww"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("1000"));
console.log(validPin("2224"));


    // Do not edit or answer below this line
    // EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
    // module.exports = {profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};