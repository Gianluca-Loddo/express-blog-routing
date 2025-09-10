// importiamo il nostro express in maniera da poterlo utilizzare
const express = require('express');
// creiamo una costante app che rappresenta la nostra applicazione
const app = express();
// definiamo una porta su cui il nostro server ascolterà le richieste
const port = 3000;


// facciamo in modo che il nostro server ascolti le richieste sulla porta definita
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// definiamo una route di tipo GET per la root
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// definiamo un array di oggetti che rappresentano degli utenti
const user = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// definiamo una route di tipo GET per ottenere tutti gli utenti
app.get('/users', (req, res) => {
  res.json(user);
});