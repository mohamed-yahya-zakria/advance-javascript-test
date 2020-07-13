// Answer Sheet - all answers should go here 
/* ##### 1. Key Pair Values 
* Create an object called "profileData". 
Add four key pair values to the object: name, surname, age and city. */

const profileData = {
    name: "Filippo",
    surname: "Moretti",
    age: 37,
    city: "Berlin"
}

/* ##### 2. Object to Array
* Convert an object into a nested array of key pair values. 
Look the example below. */

/* **Given Object** */

let convertObjectToArray = {
    "1": 10,
    "2": 20,
    "3": 30
}

console.log(Object.entries(convertObjectToArray))

/* #### Arrays 

##### 1. Data Manipulation
* Create a function named "_convertArrayData_". Use array methods to manipulate 
the data the array below. The first two items in the array should switch 
positions and the third item should be replaced by a new item. Change the data 
to get the result below.
 Print your solution to the console. */
let data = ["coffee", "tea", "juice"];

function convertArrayData([str1, str2,]) {
    result = []
    result.push(str2, str1, "milk")
    return result

}
console.log(convertArrayData(data))
/* ```javascript
["tea", "coffee", "milk"]; */

/*  ##### 2. Create Grid
* Create a function called "_createGrid_", which returns a grid of a 2D array
by accepting two arguments: `size` (which determines the number of nested arrays
    and the number of elements in each nested array) and `char` (which determines
the characters in each nested array).
Print your solution to the console. */
function createGrid (size,char){
    result=[]
    for (let i=0;i<=size.length ;i++){
        for (let j=o;j=size.length[i];j++){
        char += size[i][j]
        result.push[char]
        return result
        }
    }

}
console.log(createGrid(3,"*"))
/* ##### 3. Word Converter
* Given an array of words, create a function named "_wordConverter_" which uses
an array method to add _"er"_ to the end of each string in the array. Look at
the expected output below. **Important**: Do **not** use
a loop to complete this task. Print your solution to the console. */
let array =["smart", "kind", "sweet", "small", "clear"];

const wordConverter = (array) => {
    return array = array.map(i => i + "er");
}
console.log(wordConverter(array));


/* ##### 4. Hour Calculation
* Create a function called "_calculateHours_" which calculate how many hours
(total) this person worked in the week based on the data structure `arrayOb`
below. **Note**: start is always morning time, end is always afternoon.
Print your solution to the console. */
const hourTracking  = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
  ];
  function calculateHours (arrayOb){
      let mon =arrayOb[0].end-arrayOb[0].start
      let tue =arrayOb[1].end-arrayOb[1].start
      let wed =arrayOb[2].end-arrayOb[2].start
      let thu =arrayOb[3].end-arrayOb[3].start
      let fri =arrayOb[4].end-arrayOb[4].start

      return mon+tue+wed+thu+fri

  }
console.log("4 ",calculateHours(hourTracking))

/* #### Classes
* Create a blueprint for a course at DCI - using the `class` syntax in javascript.
The class should be named "Course" The class should contain who the teacher is,
whether the group is learning marketing or web development and the number of
students taking the course.*/


/** The class should also have a method named "spaceNeeded" that checks how big a
classroom should be depending on the number of students taking the course: 1
student =  2m². E.g. If a course has 10 students, then print: "_The classroom
should be 20m²._". Print your solution to the console.*/

/** Create a method named "details" to print all the information of the course:
"_This is a web development course taught by John Smith. There are 10 students
taking the course._". Print your solution to the console.
* **Note**: Please use the phrases found in the instructions above and just change
the output depending on the teacher, course, number of students etc.  */

class Course {
    constructor(teacher,topic,number) { 
        this.teacher = teacher; 
        this.topic = topic; 
        this.number = number; 
        this.spaceNeeded= function (){
            let result =this.number*2
            console.log("_The classroom should be" ,result, "m²._")
        }
        this.details= function (){
            console.log("_This is a ", topic," course taught by John Smith. There are ",number," students taking the course._")

        }
    }

}
const dumplings = new Course("Said", "Web Dev", 14)
dumplings.spaceNeeded();
dumplings.details();




/* ##### 1. Format your string

* Write function named "_capitalizeFirstLetter_" that accepts a string as an
argument. The function should convert the first character of each word to uppercase.
 **Example** _the quick brown fox_ → _The Quick Brown Fox_. Print your solution to
 the console. */
 function capitalizeFirstLetter(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(capitalizeFirstLetter("the quick brown fox"));


/* ##### 2. Validation
* Look at the unit tests for validating a pin. Create a function named "_validPin_"
that fulfills the requirements of the tests. */

/* **Requirements**:
 * The pin code must consist of only numbers.
 * The pin code must be 4 digits long.
 * The pin should have at least **two** different digits.
 * The pin code's last digit should be even.
 * The pin code should add up to at least 5. */

/* The function should print `true` if the pin meets all the requirements and `false`
if it does not. Print your solution to the console. */






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