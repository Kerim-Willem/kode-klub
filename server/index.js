const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const dev = process.env.DEV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		server.use(bodyParser.json());
		server.use(bodyParser.urlencoded({ extended: true }));
		server.use(cors());

		server.use('/sendmail', require('./routes/sendEmail'));

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(PORT, (err) => {
			if (err) throw err;
			console.log(`Ready on ${PORT}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
