const express = require('express')
const mysql = require('mysql');
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Bigred22!0617",
    database: "useraccounts"



});

app.post("/sign-up", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        (err,result) => {
            console.log(err)
        }
    )

});



app.listen(3001, () => {
    console.log("running on port 3001")
})