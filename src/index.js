import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/app'


ReactDOM.render(<App/>, document.getElementById("root"));



/*
const getResourse = async(url) => {
  const res = await fetch(url);
  const body = await res.text();
  return body
}

getResourse('https://jsonplaceholder.typicode.com/posts/2')
.then((body) => {
  console.log(body);
})
 .catch((err) => {
     console.log(err);
   }) */

/* fetch('https://swapi.co/api/people/1/')
   .then((res) => {
     return res.json();
   })
   .then((body) => {
     console.log(body);
   })
   .catch((err) => {
     console.log(err);
   })
 */