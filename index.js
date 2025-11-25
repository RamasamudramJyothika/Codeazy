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

