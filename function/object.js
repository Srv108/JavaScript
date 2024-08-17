// const a = {
//     name : "Saurabh Kumar",
//     age : 20,
//     roll : 32,
//     marks : 80,
//     "first Name" : "Saurabh",
//     "last Name" : "Bharti",
//     intro : function(){
//         console.log(`my name is ${a["first Name"]} and last is ${a["last Name"]} marks is ${a.marks}`);
//     }
// }
// a.marks = 76
// console.log(a.name);
// a.intro();

// const b = new Object()
/**
 * 
 * @param {*} name 
 * @param {*} roll 
 * @param {*} marks 
 */
function student(name,roll,marks){
    this.name = name;
    this.roll = roll;
    this.marks = marks;
}
const a = new student("Saurabh",32,80)
const b = new student("Gaurav",39,70)
console.log(a.name)
console.log(b.name)
console.log(a.marks)
console.log(b.marks)
