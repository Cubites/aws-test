const fs = require('fs');
const https = require('https');

// const app = require('./app');

let privateKey = fs.readFileSync("/etc/letsencrypt/live/commenter.link/privkey.pem");
let certificate = fs.readFileStync("/etc/letsencrypt/live/commenter.link/cert.pen");
let ca = fs.readFileSync("/etc/letsencrypt/live/commenter.link/chain.pen");
let credentials = { key: privateKey, cert: certificate, ca: ca };

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

// if(req.get('X-Forwarded-Proto') == 'https'){
//     https.createServer(credentials, app).listen(app.get('port'), () => {
//         console.log('https에서 서버가 실행되었습니다.');
//     })
// }else{
//     app.listen(app.get('port'), () => {
//         console.log(`http에서 서버가 실행되었습니다.`);
//     });
// }

console.log(`req.get('X-Forwarded-Proto') : `, req.get('X-Forwarded-Proto'));

app.listen(app.get('port'), () => {
    console.log(`http에서 서버가 실행되었습니다.`);
});