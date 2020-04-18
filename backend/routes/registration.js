const express = require('express');
const Account = require('../utils/Account.js');
const router = express.Router();

router.post('/', (req, res) => {
	const { loginid, password } = req.body;
	const account = new Account({ loginid, password });
	account.save((err) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send('Registration Success!');
		}
	});
});

module.exports = router;
