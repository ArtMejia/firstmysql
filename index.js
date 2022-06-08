const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'fakedatabase'
})

app.get('/insert', (req, res) => {
    const countryName = 'India'
    const population = '9600000'

    db.query('INSERT INTO countries (countryName, population) VALUES (?, ?)', 
    [countryName, population],
    (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result)
    })
})

const port = 3010

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})