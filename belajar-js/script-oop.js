// class dengan construction syntax
class Student {
   #studentGender
   constructor(studentId, studentName, studentGender) {
      this.studentId = studentId;
      this.studentName = studentName;
      this.#studentGender = studentGender; 
   }

   // function dalam class
   randomize = () =>  Math.random();

   // static untuk memanggil langsung function untuk 
   // memanggil fungsi tanpa membuat objek
   static log(str){
      console.log(str)
   }

   // getter
   get getName() { return (this.studentGender === 'L' ? 'Halo Tuan ' + this.studentName : 'Halo Nyonya ' + this.studentName) }
   get getGender() { return (this.#studentGender === 'L' ? `Tuan adalah ${this.studentName} laki-laki` : `Nyonya adalah ${this.studentName} perempuan`) }

   // setter
   set setName(name) { this.studentName = name }   
}

// constuction function
function Person(name, age) {
   this.name = name;
   this.age = age;
   
}
// menambah atribut pada seluruh objek
// tidak akan nampak jika tidak di output secara manual
Person.prototype.participate = true 

// membuat objek
const personA = new Person('jhonny', 20);
const personB = new Person('gyro', 25);

const studentA = new Student(142, 'george', 'L');
const studentB = new Student(231, 'hannah', 'P');

// menambah atribut pada 1 objek
personB.stand = 'ball breaker'      

// about class


// output
console.log(personA);
console.log(personB);
console.log(studentA);
console.log(studentB);
console.log(studentA.randomize());

// memanggil static function
Student.log('Hello, World!');

// mengakses getter dan setter
studentB.setName = 'sally';
console.log(studentB.getName);

// private attribute
console.log(studentB.studentgender); // result : undefined
console.log(studentB.getGender); // private harus menggunakan getter
// console.log(studentB.#studentgender) akan muncul error private



