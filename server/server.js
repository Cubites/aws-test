const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.set('port', 4000);
dotenv.config();

const whitelist = [`http://${process.env.AWS_IP}:80`, `http://${process.env.AWS_IP}:3000`];
 
const corsOptions = {
  origin: function (origin, callback) { 
    if (whitelist.indexOf(origin) !== -1) { // 만일 whitelist 배열에 origin인자가 있을 경우
      callback(null, true); // cors 허용
    } else {
      callback(new Error("Not Allowed Origin!")); // cors 비허용
    }
  },
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