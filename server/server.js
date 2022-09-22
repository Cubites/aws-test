const fs = require('fs');
const https = require('https');

const app = require('./app');

let privateKey = fs.readFileSync("/etc/letsencrypt/live/commenter.link/privkey.pem");
let certificate = fs.readFileStync("/etc/letsencrypt/live/commenter.link/cert.pen");
let ca = fs.readFileSync("/etc/letsencrypt/live/commenter.link/chain.pen");
let credentials = { key: privateKey, cert: certificate, ca: ca };

if(req.get('X-Forwarded-Proto') == 'https'){
    https.createServer(credentials, app).listen(app.get('port'), () => {
        console.log('https에서 서버가 실행되었습니다.');
    })
}else{
    app.listen(app.get('port'), () => {
        console.log(`http에서 서버가 실행되었습니다.`);
    });
}