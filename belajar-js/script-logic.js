
comparasion();

// Comparasion
function comparasion() {
   console.log(2 > 1);

   // banding tipe data berbeda
   let number = 2;
   let word = '2'
   console.log(number == word);  // true
   console.log(number === word); // false

   //operator logila
   let opsi1 = true
   let opsi2 = false
   // kedua kondisi harus true untuk dapat hasil true
   console.log(opsi1 && opsi2); // false
   // salah satu kondisi harus true untuk dapat hasil true
   console.log(opsi1 || opsi2); // true

   // negation, memberikan hasil boolean secara terbalik
   if (!opsi1 == false) {
      console.log("opsi1 adalah false");
   }
   
   // null cek
   let something = null
   console.log( something); //opsi1 adalah null
}

