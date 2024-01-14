datesMethod()

function datesMethod() {
   // formatnya Date(tahun, bulan(dimulai dari  0), tanggal, jam, menit, detik, milisdetik)
   // default memilih tanggal terkini
   let tglTerkini = new Date(); // result: Fri Jan 12 2024 22:40:06 GMT+0800 
   let tglCustom = new Date(2024, 0, 12, 22, 40, 6, 0);
   let tglCustString = new Date ("october 13, 2014 11:13:00");
   console.log(`Custom Date: ${tglCustom}\nString Date: ${tglCustString}\nDefault Date: ${tglTerkini}`);

   console.log(`Tampilan model UTC : ${tglTerkini.toUTCString()}`); // result: Wed, 12 Jan 2024 14:40:06 GMT
   console.log(`Tampilan model DateString : ${tglTerkini.toDateString()}`); // result: Wed Jan 12 2024
   console.log(`Tampilan model ISO : ${tglTerkini.toISOString()}`); // result: 2024-01-12T14:40:06.000Z

   // method getDate, adat getMonth(), getFullYear(), getDay()}
   console.log(tglTerkini.getTime()); // jumlahnya milidetik sejak 1970

   // contoh penggunaan, ambil nama hari berdasarkan index.array_hari -> [0-6]   
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   if ( days[tglTerkini.getDay()] == "Friday" ) {
      console.log(`Today is ${days[tglTerkini.getDay()]} in California`); 
   } else {
      console.log(`Today is ${days[tglTerkini.getDay()]}`);
   }

}

function arrIteration() {
   const numbers = [10, 4, 9, 16, 17, 24, 5, 13, 5, 82];
   let text = "";

   // for each, mengambil isi tiap elemen
   numbers.forEach(forEachFun);
   function forEachFun(value, index, array) {console.log(text = value);}

   // map mengembalikan array baru
   let newNumbers = numbers.map(mapFun);
   function mapFun(value) { return value * 2;}
   console.log(newNumbers);

   // filter mengembalikan array baru dengan elemennya di filter dari array awal
   let over18 = numbers.filter(filterFunc);
   function filterFunc(value, index, array) {return value > 15;}
   console.log(over18);

   let findOver18 = numbers.find(condCheckFun); // mengembalikan elemen pertama yang true
   let allOver18 = numbers.every(condCheckFun); // mengembalikan true jika semua elemen true
   let someOver18 = numbers.some(condCheckFun); // mengembalikan true jika ada 1 elemen true
   function condCheckFun(value) {return value > 18;}
   console.log(`${findOver18}, ${someOver18} dan ${allOver18}`);
}

function arrayMethod() {
   // array method
   let fruits = ["apple", "banana", "mango"];
   let numbers = [23, 71, 8, 3, 51]

   console.log(fruits.toString()); // mengubah array menjadi tring
   console.log(fruits.join(" * ")); // menggabungkan array dengan tambahan pemisah

   fruits.push("orange"); // menambahkan item
   fruits.unshift("kiwi"); // menambahkan item di awal
   console.log(fruits);

   let fruit1 = fruits.pop(); // menghapus item terakhir
   let fruit2 = fruits.shift(); // menghapus item pertama
   console.log(fruits);
   console.log(fruit2 +" & "+ fruit1);
   
   // menggabungkan 2 array
   let arrMix = fruits.concat(numbers)
   console.log(arrMix); // result : [ 'apple', 'banana', 'mango', 23, 71, 8, 3, 51 ]
   
   delete arrMix[3]    // mengosongkan array di index tertentu
   console.log(arrMix); // result : [ 'apple', 'banana', 'mango', empty , 71, 8, 3, 51 ]   
   arrMix.splice(3, 1, "grape")    // splice untuk mengisi array di index tertentu
   console.log(arrMix); // result : [ 'apple', 'banana', 'mango', 'grape', 23, 71, 8, 3, 51 ]

   // sort array, sort() untuk asc dan sort().reverse untuk desc
   console.log(fruits.sort().reverse());

   // sort int lebih nguwawor
   console.log( numbers.sort(function (a, b) { return a - b }) );

   const cars =[
      {type : "volvo", years : 2016},
      {type : "hyundai", years : 2001},
      {type : "bmw", years : 2010}
   ]; // sort object lebih nguwawor lagi
   console.log(cars.sort(function (a, b) { 
      return a.years - b.years 
   })); // sort by year
}

function numberMethod() {
   let x = 120
   let y = 1.826
   let z = 4.261

   console.log(x.toString()); // output dibaca sebagai string
   console.log(y.toExponential()); // mengubah format menjadi eksponen
   console.log(y.toFixed(1)); // membulatkan angka
   console.log(y.toPrecision(3)); // mempresisikan angka desimal

   // math method
   console.log(Math.round(z)); // mebulatkan ke angka terdekat
   console.log(Math.floor(y)); // membulatkan ke bawah
   console.log(Math.ceil(y)); // membulatkan ke atas
}

function stringMethod() {
   // string method
let text = "We are so-called the \"Vikings\" from the north";

// panjang string
let textLength = text.length // result: 45

// slice, substring, substr untuk mengambil sebagian isi string
let textSlice = text.slice(15,30); // result : d the "Vikings"
let textSubstring = text.substring(8, 14); // result : o-call
let textSubStr = text.substr(8, 14); // result : o-called "Viki
              // text.substr(index, length)

// replace untuk mengganti isi string
let textReplace = text.replace(/ViKiNgS/i, "Nordic");

// concat untuk menggabungkan string
let textConcat = textSlice.concat("*", textSubstring);

// trim untuk menghapus space yang tidak terlalu penting
let text2 = "      Good bye, World    ";

console.log(text);
console.log(textLength);
console.log(textSlice);
console.log(textSubStr);
console.log(textSubstring);
console.log(textReplace);
console.log(text.toUpperCase()); // result: WE ARE SO-CALLED "VIKINGS" FROM THE NORTH
console.log(text.toLowerCase()); // result: we are so-called "vikings" from the north
console.log(textConcat);
console.log(`Tanpa Trim()  : ${text2}\nDengan Trim() : ${text2.trim()}`   );

// indexOf mencari lokasi index char pertama pada string 
console.log(text.indexOf("the")); // result: 17

// lastIndexOf mencari lokasi index char terakhir pada string 
console.log(text.lastIndexOf("the")); // result: 36

// hasil boolean, akan true jika string ada
console.log(text.includes("from") + " & " + text.includes("of"));  // result: true & false
}