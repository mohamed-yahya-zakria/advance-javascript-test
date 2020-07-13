// Answer Sheet - all answers should go here 
"use strict";

// Objects
// 1. Key Pair Values
const profileData = {
    name: `Pei-Ling`,
    surname: `Wu`,
    age: 150,
    city: `Berlin`
}

console.log(`******************** Objects -1. ********************\n`, profileData)
console.log(`*******************************************`)

// 2. Object to Array 
const convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}

console.log(`******************** Objects -2. ********************\n`, Object.keys(convertObjectToArray).map((key) => [Number(key).toString(), convertObjectToArray[key]]))
console.log(`*******************************************`)

// Arrays
// 1. Data Manipulation
const convertArrayData = ["coffee", "tea", "juice"]
console.log(`initialize`, convertArrayData);
[convertArrayData[0], convertArrayData[1]] = [convertArrayData[1], convertArrayData[0]];
convertArrayData[2] = `milk`

console.log(`******************** Arrays -1. ********************\n`, convertArrayData)
console.log(`*******************************************`)

// 2. Create Grid

// 3.
let wordConverter = ["smart", "kind", "sweet", "small", "clear"]
const str = 'er'

const addEnding = (wordConverter, str) => {
    let result = [];
    for (let i = 0; i < wordConverter.length; i++) {
        result[i] = wordConverter[i] + str // assign like this
    }
    return result
}
console.log(`******************** Arrays -3. ********************\n`,  addEnding(wordConverter, str))
console.log(`*******************************************`)

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