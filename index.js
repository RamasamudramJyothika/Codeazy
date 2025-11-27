const studentArray = [
    {
        name : "jyothika",
        age : 22,
        color : "green",
        alive : true,
        language : ["english", "telugu"],
        details: { height:152, weight:60},
    },

    {
        name : "meharu",
        age : 23,
        color: "Yellow",
        alive : true,
        language : ["hindi", "telugu", "english"],
        details : { height:160, weight:64},
    },

    {
        name : "tahaseen",
        age : 20,
        color: "Red",
        alive : true,
        language : ["hindi", "english"],
        details : { height:142, weight:52},
    },

    {
        name : "sashi",
        age : 25,
        color: "Black",
        alive : false,
        language : ["telugu", "english", "hindi"],
        details : { height:172, weight:72},
    },

    {
        name : "ruhin",
        age : 15,
        color: "blue",
        alive : true,
        language : ["hindi", "telugu"],
        details : { height:126, weight:43},
    },

    {
        name : "safiya",
        age : 9,
        color: "purple",
        alive : true,
        language : ["hindi"],
        details : { height:98, weight:32},
    },

    {
        name : "bhoomi",
        age : 12,
        color: "green",
        alive : true,
        language : [ "english"],
        details : { height:120, weight:44},
    },
];

const studentArray1 = [...studentArray];
//Filter the array to get items whose age is < 10.
const ageBelowTen = studentArray1.filter( item => item.age < 10);
console.log(ageBelowTen);

//output
//[
// {
//  name: 'safiya',
//    age: 9,
//   color: 'purple',
//   alive: true,
//   language: [ 'hindi' ],
//    details: { height: 98, weight: 32 }
//  }
//]

//filter(): checks every item in the array and returns only those meets the condition and it wont change the original array and gives filtered array.

const studentArray2 = [...studentArray];
//Filter the array to get items whose age is > 10.
const ageAboveTen = studentArray2.filter( item => item.age > 10);
console.log(ageAboveTen);
//output will be all the people except safiya.

const studentArray3 = [...studentArray];
//Find the first item whose color is “green”.
const firstGreen = studentArray3.find(item => item.color === "green");
console.log(firstGreen);
//output:
//{
// name: 'jyothika',
//age: 22,
// color: 'green',
// alive: true,
//  language: [ 'english', 'telugu' ],
//details: { height: 152, weight: 60 }
//}

//find(): scan items one by one,stop immediately when the condition becomes true and return only the first matching item, not all of them
//This makes it faster than filter() for locating a single match.

//Add a new property to each object.
const studentArray4 = studentArray.map(item => {
    return {
        ...item,    //copy existing items
        place:"madanapalle",   //new property
    };
});
console.log(studentArray4);
//map():processes every item and returns a new array of new objects and allows us to add or modify fields without touching the original objects.


//Delete any one property from each object.
const studentArray5 = studentArray.map(item => {
  let copy = { ...item }; // create a shallow copy
  delete copy.color;      // delete from the copy only
  return copy;
});

console.log(studentArray5);

//Use forEach() to print each item.
const studentArray6 = [...studentArray];

studentArray6.forEach((item, index) => {
    console.log(`Student ${index + 1}:`, item);
});
//output:
/*Student 1: {
  name: 'jyothika',
  age: 22,
  color: 'green',
  alive: true,
  language: [ 'english', 'telugu' ],
  details: { height: 152, weight: 60 }
}
Student 2: {
  name: 'meharu',
  age: 23,
  color: 'Yellow',
  alive: true,
  language: [ 'hindi', 'telugu', 'english' ],
  details: { height: 160, weight: 64 }
}
Student 3: {
  name: 'tahaseen',
  age: 20,
  color: 'Red',
  alive: true,
  language: [ 'hindi', 'english' ],
  details: { height: 142, weight: 52 }
}
Student 4: {
  name: 'sashi',
  age: 25,
  color: 'Black',
  alive: false,
  language: [ 'telugu', 'english', 'hindi' ],
  details: { height: 172, weight: 72 }
}
Student 5: {
  name: 'ruhin',
  age: 15,
  color: 'blue',
  alive: true,
  language: [ 'hindi', 'telugu' ],
  details: { height: 126, weight: 43 }
}
Student 6: {
  name: 'safiya',
  age: 9,
  color: 'purple',
  alive: true,
  language: [ 'hindi' ],
  details: { height: 98, weight: 32 }
}
Student 7: {
  name: 'bhoomi',
  age: 12,
  color: 'green',
  alive: true,
  language: [ 'english' ],
  details: { height: 120, weight: 44 }
}
  */

//forEach():forEach() loops through every item in the array.It cannot return a new array (which map() can).It always returns undefined.It cannot stop early.

const studentArray7 = [...studentArray];
//Use reduce() to calculate a total value.
const totalAge = studentArray7.reduce((sum, item) => sum + item.age, 0);
console.log("Total Age:", totalAge);
/* output:
Total Age: 126
*/
//reduce():it takes all the items in an array and reduces them into a single value.

//Sort the array based on age.
//Explain what sort() does and sorting numbers.
const studentArray8 = [...studentArray];
const sortedByAge = studentArray8.sort((a, b) => a.age - b.age);
console.log(sortedByAge);
//sort(): it is used to arrange the array from lowest value to the highest value

//Create a new array containing only one property (names, colors etc.)
const studentArray9 = [...studentArray];
const onlyNames = studentArray9.map(item => item.name);
console.log(onlyNames);
/*output:
[
  'jyothika', 'meharu',
  'tahaseen', 'sashi',
  'ruhin',    'safiya',
  'bhoomi'
]
*/

const studentArray10 = [...studentArray];
//Use every() to check if all items meet a condition.
const allAlive = studentArray10.every(item => item.alive === true);
console.log(allAlive);
//output:false

//Use some() to check if at least one item meets a condition.
const studentArray11 = [...studentArray];

const isChild = studentArray11.some(item => item.age < 10);

console.log(isChild); // output:true (safiya)

//Convert array of names to a single string using join().
const studentArray12 = [...studentArray];
const namesArray = studentArray12.map(item => item.name);
const namesString = namesArray.join(", ");
console.log(namesString);

//Combine your array with another using spread operator.
//Explain how spread avoids modifying the original.
const extraStudents = [
    { 
        name: "Rahul", 
        age: 30, 
        color: "white", 
        alive: true 
    },
    { 
        name: "Nitya",
        age: 19,
        color: "pink", 
        alive: true }
];
const combinedArray = [...studentArray, ...extraStudents];
console.log(combinedArray);