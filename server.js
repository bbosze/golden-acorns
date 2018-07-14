const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const PORT = 9000;
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
  database: 'goldenacorn',
});

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/initialstates', (req, res) => {
  conn.query(`SELECT * FROM initialstates WHERE technology = '${req.query.technology}';`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});


app.put('/api/initialstates', (req, res) => {
  const {acorns, technology} = req.body;
  if (acorns === undefined) {
    res.status(400).json({
      message: 'Not enough data',
  });
  return;
  }
  const sql = `
    UPDATE initialstates
      SET initialnumber  = ?
      WHERE technology = ?;`;
  conn.query(sql, [acorns, technology], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'An error occured. Please try again.',
      });
      return;
    }
    res.json({
      message: 'Initialstate updated.',
      email: result.email,
    });
  });
});


app.get('/users', (req, res) => {
  conn.query(`SELECT email FROM users;`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});


app.post('/users', (req, res) => {
  const {email, password} = req.body;
  if (email === undefined || email === '' ||
    password === undefined || password === '') {
    res.status(400).json({
      message: 'Not enough data',
  });
  return;
  }
  const sql = `
    INSERT INTO users (email, password)
    VALUES (?, ?);
  `;
  conn.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'An error occured. Please try again.',
      });
      return;
    }
    res.json({
      message: 'New attraction successfully created.',
      email: result.email,
    });
  });
});


app.listen(PORT, () => {
  console.log(`CORS-enabled web server is running on ${PORT}`);
});
