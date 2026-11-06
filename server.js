/*----------------- Require packages -----------------*/
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(expressLayouts);

/* --------------------- Routes --------------------- */
app.get('/', (req, res) => {
  res.render('index');
});

/* ------------------- Port listener ----------------- */
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Panel running on http://localhost:${PORT}`);
});
