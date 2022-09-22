const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.set('port', 4000);
dotenv.config();

app.use(cors({
    origin: '*'
}));

// app.use(function (req, res, next) {
//     if (!req.secure && req.get('X-Forwarded-Proto') !== 'https') {
//     res.redirect('https://' + req.get('Host') + req.url);
//     } else next();
// });

app.post('/api/main', (req, res) => {
    console.log('/api/main 신호 확인');
    console.log('req.secure : ', req.secure);
    console.log(`req.get('X-Forwarded-Proto') :`, req.get('X-Forwarded-Proto'));
    console.log(`req.get('Host') : `, req.get('Host'));
    console.log('req.url : ', req.url);
    res.status(200).send({success: true, contents: 'this is Main page'});
})

app.post('/api/first', (req, res) => {
    res.status(200).send({success: true, contents: 'This is First page'});
});

app.post('/api/second', (req, res) => {
    res.status(200).send({success: true, contents: 'This is Second page'});
});

export default app;