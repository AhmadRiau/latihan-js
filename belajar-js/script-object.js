const person ={
   name: "John",
   age: 30
}

// menampilkan isi object
console.log(person);
console.log(person.name);
console.log(person.age);
console.log("===================================");

// menambah data baru dalam object
person.location = "Indonesia";
person.age = 34
console.log(person);
console.log("===================================");

//  menghapus data dalam oject
delete person.location;
console.log(person);

// fungsi untuk membuat object
function makeObject(param1, param2) {
   return{
      param1: param1,
      param2: param2,
   };
}
let object1 = makeObject("value1", "value2");
console.log(object1);

// cek keberadaan data dalam object
console.log('param1' in object1); // true
console.log('param3' in object1); // false
// menampilkan seluruh isi object
for (const key in object1) {
   console.log(key,"is in", object1[key]);
}
