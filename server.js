var express = require('express');
var app = express(); //express app 생성
var router = require('./winebar-react/router/main')(app); //main.js를 불러와서 app에 전달
const bodyParser = require('body-parser');
const hostname = '192.168.0.29';

//서버가 html을 읽을 수 있도록 경로 지정
app.set('views', __dirname + '/views');

//html 렌더링시 ejs엔진사용 지정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.json());
app.use('/api', (req, res) => res.json({username:'bryan'}));
//서버를 열때 3000포트로 열고 
//서버를 연후 작성한 콜백함수를 실행
app.listen(3000, function() {
	console.log('Example app Listening on port 3000');
});

//정적파일 경로 W
app.use(express.static('public'));