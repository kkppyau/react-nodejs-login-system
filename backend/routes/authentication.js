const express = require('express');
const jwt = require('jsonwebtoken');
const Account = require('../utils/Account.js');
const config = require('../config.js');
const router = express.Router();

router.post('/', (req, res) => {
	const { loginid, password } = req.body;
	Account.findOne({ loginid }, (err, account) => {
		if (err) {
			res.status(500).json({
				error: 'Error occured. Please try again.',
			});
		} else if (!account) {
			res.status(401).json({
				error: 'Incorrect login ID or password.',
			});
		} else {
			account.checkPassword(password, account.password, (err, correct) => {
				if (err) {
					res.status(500).json({
						error: 'Error occured. Please try again.',
					});
				} else if (!correct) {
					res.status(401).json({
						error: 'Incorrect login ID or password.',
					});
				} else {
					const payload = { loginid };
					const jwtToken = jwt.sign(
						payload,
						config.jwtSecret,
						config.jwtSignOptions
					);

					res.cookie('token', jwtToken, { httpOnly: true }).sendStatus(200);
				}
			});
		}
	});
});

module.exports = router;
