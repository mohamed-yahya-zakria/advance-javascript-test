// Answer Sheet - all answers should go here 
'use strict';

// DATA STRUCTURE 1. 

let profileData = {
    name: 'Csokas',
    surname: 'Marcell',
    age: 39,
    city: 'Berlin'
};
console.log(profileData);


//DATA STRUCTURE 2. 

const convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
};

let array = Object.keys(convertObjectToArray)
    .map(function (key) {
        return [key, convertObjectToArray[key]]
    });

console.log(array);

//Arrays 1. 

const convertArrayData = arr => {
    let result = [arr[0], arr[1], arr[2]] = [arr[1], arr[0], 'milk'];
    return result
}

console.log(convertArrayData(["coffee", "tea", "juice"]))


// Array 2. 

const createGrid = (size, text) => {
    let myArr = new Array(size)
    let myNestedArr = new Array(size)
    for (let i = 0; i < size; i++) {
        myNestedArr[i] = text
        myArr[i] = myNestedArr
    }
    return myArr;
}

console.log(createGrid(3, "*"))

//Arrays 3. 


function wordConverter() {
    let arr = ["smart", "kind", "sweet", "small", "clear"];
    const map1 = arr.map(x => x + "er");
    return console.log(map1);
}
wordConverter(); 

//Arrays 3. 

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

const calculateHours = () => {
    let result = 0;
    for (let i = 0; i < hourTracking.length; i++) {
        result += hourTracking[i].end - hourTracking[i].start;

    }
    return result;
}

console.log(calculateHours(hourTracking));

// Classes

class Course {
    constructor(teacher, course, students) {
        this.teacher = teacher;
        this.course = course;
        this.students = students;
    }
    spaceNeeded() {
        console.log(`The classroom should be ${this.students*2}m².`)
    }
    details() {
        console.log(`This is a ${this.course} course taught by ${this.teacher}. There are ${this.students} students taking the course.`)
    }
}
const course = new Course('John', 'web development', 22)

course.spaceNeeded()
course.details()

//1. Format your string

const capitalizeFirstLetter = str => {
    let arr = str.split(' ');
    let result = arr.map(function (value) {
        return value[0].toUpperCase() + value.substr(1, value.length);
    })
    return result.join(' ')
}

console.log(capitalizeFirstLetter("hey there"));



// 2. Validation


const validPin = (pin) => {
    let arr = pin.split('')
    let sum = arr.reduce(function (acc, value) {
        return acc + parseInt(value)
    }, 0)
    let same = arr.every(value => value === arr[0])
    if (typeof (parseInt(pin)) === 'number' && pin.length === 4 && parseFloat(pin[pin.length - 1]) % 2 === 0 && sum >= 5 && same === false) {
        return true;
    } else {
        return false;
    }

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