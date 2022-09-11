const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.set('port', 4000);
dotenv.config();

app.use(cors({
    origin: '*'
}));

app.post('/api/main', (req, res) => {
    res.status(200).send({success: true, contents: 'this is Main page'});
})

app.post('/api/first', (req, res) => {
    res.status(200).send({success: true, contents: 'This is First page'});
});

app.post('/api/second', (req, res) => {
    res.status(200).send({success: true, contents: 'This is Second page'});
});


app.listen(app.get('port'), () => {
    console.log(`Running server at ${app.get('port')} port ...`);
});