const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const port = 3000

app.use(express.json())


app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM estudiantes";
    db.query(sql, (err, data) => {
        if(err) return app.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO estudiantes (`Nombre`, `Email`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE estudiantes set Nombre = ?, Email = ? WHERE ID = ?"
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id

    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.delete('/estudiante/:id', (req, res) => {
    const sql = "DELETE FROM estudiantes WHERE ID = ?"
    const id = req.params.id

    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.listen(port, () => console.log(`App escuchando en el puerto ${port}!`))