// Answer Sheet - all answers should go here 
'use strict'
// Objects ex 1.
const profileData = {
    name: 'vasilis',
    surname: 'Srkimpas',
    age: 33,
    city: 'Berlin'
}
console.log('objects ex 1');
console.log(profileData);
console.log('*******-*******')


// Objects ex 2.
const convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}
console.log('objects ex 2');
console.log(Object.entries(convertObjectToArray))
console.log('*******-*******')

// Arrays ex 1.

const convertArrayData = (arr) => {
    let result = [arr[0], arr[1], arr[2]] = [arr[1], arr[0], 'milk'];
    return result
}
console.log('Arrays ex 2');
console.log(convertArrayData(["coffee", "tea", "juice"]))
console.log('*******-*******')

// Arrays ex 2.

const createGrid = (size, char) => {
    let myArr = new Array(size)
    let myNestedArr = new Array(size)
    for (let i = 0; i < size; i++) {
        myNestedArr[i] = char
        myArr[i] = myNestedArr
    }
    return myArr;
}

console.log('Arrays ex 2');
console.log(createGrid(3, "*"))
console.log('*******-*******')


// Arrays ex 3.
const wordConverter = (arr) => {
    const result = arr.map(function (values) {
        return values.concat('er')
    })
    return result;
}

console.log('Arrays ex 3');
console.log(wordConverter(["smart", "kind", "sweet", "small", "clear"]))
console.log('*******-*******')


// Arrays ex 4.
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
    let everyDay = 0
    let result = 0;
    for (const item of obj) {
        everyDay = item.end - item.start
        result += everyDay
    }
    return result
}
console.log('Arrays ex 4');
console.log(calculateHours(hourTracking))
console.log('*******-*******')


// Classes 
class Course {
    constructor(teacher, whatCourse, studentsNum) {
        this.teacher = teacher;
        this.whatCourse = whatCourse;
        this.studentsNum = studentsNum;
    }
    spaceNeeded() {
        console.log(`The classroom should be ${this.studentsNum*2}m².`)
    }
    details() {
        console.log(`This is a ${this.whatCourse} course taught by ${this.teacher}. There are ${this.studentsNum} students taking the course.`)
    }
}
const course = new Course('John', 'web development', 22)
console.log('**Classes exercise**');
course.spaceNeeded()
course.details()
console.log('*******-*******')


// Problem Solving ex 1.
const capitalizeFirstLetter = (str) => {
    let arr = str.split(' ');
    let result = arr.map(function (value) {
        return value[0].toUpperCase() + value.substr(1, value.length);
    })
    return result.join(' ')
}

console.log('Problem Solving ex 1.');
console.log(capitalizeFirstLetter("hey there"));
console.log('*******-*******')


// Problem Solving ex 1.
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

console.log('Problem Solving ex 1.');
console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("wwww"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("1000"));
console.log(validPin("2224"));
console.log('*******-*******')

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