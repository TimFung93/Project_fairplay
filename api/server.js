const express = require('express');
const app = express();

// use the port value from the node environment, or 8080 if it can't be found'

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + './../build'));

app.get('*', (req, res) => {
	res.sendFile('index.html', { root: __dirname + './../build' });
});

app.listen(PORT, () => {
	console.log("Listening on Port:%s", PORT)
	console.log("Stop with Ctrl+C");
});