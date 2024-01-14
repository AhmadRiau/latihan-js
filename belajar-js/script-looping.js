// perulangan


// perulangan sederhana
for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) continue;  // continue akan melewati iterasi saat ini
   console.log("for loop =",index); // result: 1 3 5 7 9
}

// while
let loop = 0
while (loop < 3) {
   console.log("while loop =", loop);
   loop++
}

// do while akan menjalankan perulangan minimal 1x
loop = 0
do {
   console.log("do while loop =", loop);
 
} while (loop < 0);

// perulangan for of untuk mengakses array atau objek
let database = ["a", "b", "c"];
for (const item of database) {
   console.log(item);
}