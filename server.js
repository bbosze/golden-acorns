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

app.get('/api/initialstates', (req, res, next) => {
  conn.query(`SELECT * FROM initialstates WHERE technology = '${req.query.technology}';`, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`CORS-enabled web server is running on ${PORT}`);
});
