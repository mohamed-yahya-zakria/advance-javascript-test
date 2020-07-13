// Answer Sheet - all answers should go here 


// task 1

const profileData = {
    name: 'vincenzo',
    surname: 'mancuso',
    age: 34,
    city: 'rome'
}

// task 2

convertObjectToArray = (object) => {
    let newArray = [];
    newArray.push(Object.entries(object));
    return newArray;
}

/* console.log(convertObjectToArray({
    "1": 10,
    "2": 20,
    "3": 30
})); */

// task 3

const convertArrayData = (array) => {
    const items = ["milk", "bread", "water"];
    const randomIndex = Math.floor(Math.random() * items.length);
    array.pop();
    array.reverse();
    array.push(items[randomIndex]);
    return array;
}

/* console.log(convertArrayData(["coffee", "tea", "juice"])); */

// task 4

const createGrid = (number, sign) => {

    let row = [];
    for (let i = 0; i < number; i++) {
        row.push(sign)
    }
    let grid = [];

    for (let i = 0; i < row.length; i++) {
        grid.push(row);
    }
    return grid;

}

/* console.log(createGrid(3, "*")); */


// task 5
const wordConverter = (array) => array.map(word => word + "er");

/* console.log(wordConverter(["smart", "kind", "sweet", "small", "clear"])); */
// task 6


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

const calculateHours = (obj) => {
    let hours = [];
    hours = obj.map(obj => obj.end - obj.start)
    return hours.reduce((acc, num) => acc + num);
}
console.log(calculateHours(hourTracking));

// task 7

class Course {

}

// task 8

const capitalizeFirstLetter = () => {}

// task 9

const validPin = () => {}



// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
/* module.exports = {
    profileData,
    convertObjectToArray,
    convertArrayData,
    createGrid,
    wordConverter,
    calculateHours,
    Course,
    capitalizeFirstLetter,
    validPin
}; */