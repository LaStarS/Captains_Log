require('dotenv').config()

const express = require('express');
const app = express();

const connectDB = require('./config/db')
connectDB()

const PORT = 8085;

const methodOverride = require('method-override')

const captLogRoutes = require('./routes/captLogRoutes')

const { createEngine } = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

// const New = require('/logs/new');

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello Captain!</h1>
    <h3><a href="/captLogs">Captain's Logs</a></h3>
    `)
})

// app.get('/views/New', (req, res) => {
//     res.render('New')
// });

// // app.use('/New', New);

// app.get('/logs', (req, res) => {
// logs.create(req.body)
// res.send(req.body)
// })

app.use(express.urlencoded({ extended: true }))

app.use('/captLogs', captLogRoutes)


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
});