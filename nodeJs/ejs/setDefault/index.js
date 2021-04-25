const express = require('express');
const app = express();

var ejs = require('ejs');

app.set('view-engine','ejs');

const server = app.listen(80, () => {
    console.log(' start Server :  localhost :80')
});

app.get('/', async (req, res) => {
    res.render('index.ejs', {
        name :'YunHwan'
    });
});