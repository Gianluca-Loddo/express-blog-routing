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

/* definiamo una route di tipo GET per ottenere tutti gli utenti
app.get('/users', (req, res) => {
  res.send("mostro tutti gli utenti");
});*/

// BOUNS 
app.get('/users', (req, res) => {
  res.json(user);
});



// iniziamo le operazioni CRUD -> "Create, Read, Update, Delete" (operazioni sulla risorsa) 
// che corrispondono a ->  "INDEX, SHOW, CREATE, UPDATE, DELETE" (nomi delle operazioni/rotte)
// ogni operazione corrisponde ad un metodo HTTP diverso (GET, POST, PUT, DELETE) -> i VERBI HTTP

// INDEX -> ottenere tutti gli utenti (GET /users) -> già fatto sopra

// definiamo una route di tipo GET per ottenere un utente specifico (SHOW)
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const foundUser = user.find(u => u.id === userId);
  if (foundUser) {
    res.json(foundUser);
  } else {
    res.status(404).send('User not found');
  }
});