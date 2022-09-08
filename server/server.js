const express = require('express');
const cors = require('cors');

const app = express();
app.set('port', 4000);

const corsOptions = {
    origin: 'http://localhost:4000',
    credentials: true
};
app.use(cors(corsOptions));

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