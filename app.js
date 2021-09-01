require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './views')));
app.use(express.static(path.join(__dirname, './public')));

// home route
app.get('/', (req, res) => {
  res.render('index'.html);
});

// server listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
