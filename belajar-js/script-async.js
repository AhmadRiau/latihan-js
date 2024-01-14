// callback
function greeting(name) {
   alert(`Hello ${name}`)
}
function processUserInput(callback) {
   var name = prompt("Please enter your name")
   callback(name)
}

/* cara pemanggilan callback yang lain
> normal
   processUserInput(greeting)
> anonymous function
   processUserInput(function (name) {alert("Hello " + name)})
> arrow function
   const processUserInput = (callback) => {
      var name = prompt("Please enter your name")
      callback(name)
   }
   processUserInput((name) => alert(`Hello ${name}`))
*/

// promise function
function downloadImage(url) {
   return new Promise(function (resolve, reject) {
      const image = download(url)      
      if (image) resolve(image)
      else reject("image not found")      
   })
}
function download(url) {
   const image = new Image()
   image.src = url
   return image
}

// promise call
function callmage() {
   downloadImage("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg")
   .then(function (image) {      
      let imageHolder = document.getElementById("image");   
      imageHolder.appendChild(image)
      console.log("image successfully downloaded"); 
   })
   .catch(function (error) {
      console.log("image failed to download");   
      console.log(error);
   })
}

// promise static method
const promiseA = Promise.resolve(2);
const promiseB = new Promise((resolve) => setTimeout(resolve, 300, 'quick'))
const promiseC = new Promise((resolve) => setTimeout(resolve, 4000, 'slow'));
const promiseD = Promise.reject(3)


// Promise.all -> output semua promise harus selesai
Promise.all([promiseA, promiseB, promiseC])
   .then((values) => console.log(`All : ${values}`))

// Promise.any -> output yang pertama selesai dan berhasil
Promise.any([promiseD, promiseB, promiseC])
   .then((values) => console.log(`Any : ${values}`))

// Promise.race -> output yang pertama selesai tidak peduli berhasil atau tidak
console.log(`Race : `)
Promise.race([promiseD, promiseB, promiseC])
   .then((values) => {      
      console.log(values);
   })