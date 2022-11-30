const express = require('express');
const app = express();

app.set('views', './views/templates')
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server starts at: " + PORT))