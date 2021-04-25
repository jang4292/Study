const express = require('express');
const app = express();

var ejs = require('ejs');

app.set('view-engine','ejs');
app.set('views','./views'); // 뷰 폴더를 ./views 경로로 설정한다.

const server = app.listen(80, () => {
    console.log(' start Server :  localhost :80')
});

app.get('/', async (req, res) => {
    res.render('index.ejs', {
        name :'YunHwan'
    });
});