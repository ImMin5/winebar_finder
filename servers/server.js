const express = require('express');
const app = express();
const api = require('./routes/index');


const bodyParser = require('body-parser');
const port =process.env.PORT || 9505;

app.use(bodyParser.json());
app.use('/api', api);


app.listen(port, function() {
	console.log('Example app Listening on port '+port);
});

//정적파일 경로 W
app.use(express.static('public'));