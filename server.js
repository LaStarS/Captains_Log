const express = require('express');
const app = express();

const PORT = 8085;

const { createEngine } = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

// const New = require('/logs/new');

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.get('/views/New', (req, res) => {
    res.render('New')
});

// app.use('/New', New);

app.get('/logs', (req, res) => {
logs.create(req.body)
res.send(req.body)
})


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
});