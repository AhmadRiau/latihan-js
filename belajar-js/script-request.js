// Fetching data
const url = 'https://jsonplaceholder.typicode.com/todos'
const optionsGet = {method: 'GET'}
const optionsPost = {
   method: 'POST',
   body : JSON.stringify({
      title: 'Try Something new', 
      completed : 'false',
      userId : 10
   }),
}

// fecth get
async function callGet() {
   fetch(url, optionsGet)
      .then(res => res.json())
      .then(res => console.log(res))
}
// fecth post
function callPost() {
   fetch(url, optionsPost) 
   .then(data => data.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))
}

async function getArray() {
   try {
      const respon = await fetch(url, optionsGet)
      const data = await respon.json()
      console.log(data);
   } catch (error) {
      console.log(error);
   }
}
getArray()