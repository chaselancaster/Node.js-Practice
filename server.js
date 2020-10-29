const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    console.log('<h1>HEELLLLOO</h1>')
    next()
})

app.get('/', (req, res) => {
    res.send("root")
})

app.get('/profile', (req, res) => {
    res.send("getting profile")
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user)
})

app.listen(3000);