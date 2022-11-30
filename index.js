const express = require('express');
const app = express();

app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/map', (req, res) => {
    res.render('map');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server starts at: " + PORT))