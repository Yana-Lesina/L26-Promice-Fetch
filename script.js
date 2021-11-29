'use strict'

const sendData = (user) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', 
    body: user,
    headers: {
      'Content-type' : 'application/json; charset=UTF-8'
    }
  })
  .catch(error => alert('Send: ' + error))
}

const getData = () => {
  const received = fetch("./json data/db.json") //возвращает promice

  received
    .then(response => response.json()) 
    .then(user => sendData(JSON.stringify(user))) 
    .catch(error => alert('Get: ' + error))
}

getData()