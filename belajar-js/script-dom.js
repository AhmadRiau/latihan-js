// dom dengan id
let idContoh = document.getElementById("contoh");
let IdHasil = document.getElementById("hasil");

IdHasil.innerHTML = 
   `Isi dari id contoh adalah <i>"${idContoh.innerText}"</i>`;

//dom dengan class, menggunakan array
let classId = document.getElementsByClassName("caseText");
let classIdHasil = document.getElementById("Case1");

classIdHasil.innerHTML = 
`Isi dari id contoh adalah "<i>${classId[0].innerText}</i>"`;
