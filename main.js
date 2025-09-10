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

// BOUNS (INDEX) -> ottenere tutti gli utenti (GET /users)
app.get('/users', (req, res) => {
  res.json(user);
});



// iniziamo le operazioni CRUD -> "Create, Read, Update, Delete" (operazioni sulla risorsa) 
// che corrispondono a ->  "1. INDEX, 2. SHOW, 3. CREATE, 4. UPDATE, 5. MODIFY, 6. DELETE" (nomi delle operazioni/rotte)
// ogni operazione corrisponde ad un metodo #1 HTTP diverso (GET, POST, PUT, PATCH, DELETE) -> i VERBI HTTP

//1. INDEX -> ottenere tutti gli utenti (GET /users) -> già fatto sopra

//2. SHOW -> ottenere un singolo utente (GET /users/:id)
app.get('/users/:id', (req, res) => {   // pattern della rotta '/users/:id' e placeholder :id
    const {id} = req.params; //Qui si sta facendo destructuring → estrae direttamente id da req.params
                            //id è un nome convenzionale (dato da noi), si va a recuperare (req) params che contiene l'id
   const utenteID = user.find((utenteEL) => utenteEL.id === parseInt(id));
    if (!utenteID) {
        return res.status(404).json({message:'Pagina non trovata', error: 'not found'});
    }
    res.send('Mostrami il singolo utente: ' + req.params.id);
});

