// Answer Sheet - all answers should go here 

// Objects
const profileData = {
    name: "Andrea",
    surname: "Buffetti",
    age: 29,
    city: "Berlin"
}

const convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}

const convertedArray = Object.entries(convertObjectToArray);
console.log(convertedArray);

// Arrays
// 1. Data Manipulation
const originalArray = ["coffee", "tea", "juice"];

const convertArrayData = (arr, fromIndex, toIndex) => {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    let i = arr.indexOf("juice");
    arr[i] = "milk";
}

convertArrayData(originalArray, 1, 0);
console.log(originalArray);

// 2. Create Grid

function createGrid(size, char) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push([]);
        arr[i].push(new Array(size));
        for (let j = 0; j < size; j++) {
            arr[i][j] = char;
        }
    } return arr;
}

console.log(createGrid(3, "*"))
// i failed unfortunately //

/* const matrixOne = (size, char) => {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = char;
        }
    }
}
 */
/* console.log(matrixOne(3, "*"))

const matrixTwo = (size, char) => {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = new Array(char);
    }
}

console.log(matrixTwo(3, "*")) */

// 3. Word Converter

const arrayOfWords = ["smart", "kind", "sweet", "small", "clear"];

const wordConverter = (array) => {
    return array = array.map(i => i + "er");
}

console.log(wordConverter(arrayOfWords));

//4. Hour Calculation
/* 
const calculateHours = (array) => {

} */

// Classes

class Course {
    constructor(teacher, courseTopic, studentsNumber) {
        this.teacher = teacher;
        this.courseTopic = courseTopic;
        this.studentsNumber = studentsNumber;
        this.spaceNeeded = function () {
            let result = this.studentsNumber * 2
            console.log("The classroom should be", result, "m².")
        }
        this.details = function () {
            console.log("This is a", courseTopic, "course taught by", teacher, ".There are", studentsNumber, " students taking the course.")
        }
    }
}
const myClass = new Course("Naqvi", "Web Development", 15)
myClass.spaceNeeded();
myClass.details();

// Problem Solving
// 1. Format your string

const capitalizeFirstLetter = (string) => {
    string = string.split(" ");

    for (let i = 0, x = string.length; i < x; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substring(1);
    }

    return string.join(" ");
}

console.log("******", capitalizeFirstLetter("hey there"), "******");

// 2. Validation

/* const validPin = (string) => {
    if (string.length === 4 && ) {
        return true
    } else if {

    } else {
        return false
    }

    validPin("1234");
 */

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};