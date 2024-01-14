// functiona programing


const students = [
    { name: "Alice", age: 25 },
    { name: "Fiona", age: 24 },
    { name: "Bob", age: 30 },
    { name: "Ivan", age: 29 },
    { name: "Charlie", age: 22 },
    { name: "Hannah", age: 27 },
    { name: "Diana", age: 35 },   
    { name: "George", age: 32 },
    { name: "Ethan", age: 28 },
    { name: "Julia", age: 31 },
];

// high order function
const filtered = students.filter( student => student.age > 25 )
const maped = students.map( student => `${student.name} berusia ${student.age}` )
const reduced = students.reduce((prev, current) => prev + current.age, 0)
const averageAge = reduced/ students.length

// currying
const curryURL = (protocol) => (hostname) => (page) => `${protocol}://${hostname}/${page}`
const baseURL = curryURL("https")("google.com")
const pageLogin = baseURL("login")
const pageHome = baseURL("home")

// destructuring assignment
const arrExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [arrDestrA, arrDestrB] = [arrExample.slice(0, arrExample.length/2), arrExample.slice(arrExample.length/2)];


// output
console.log(filtered);
console.log(maped);
console.log(averageAge);
console.log(`${pageLogin}\n${pageHome}`);
console.log(`${arrDestrA}\n${arrDestrB}`);
