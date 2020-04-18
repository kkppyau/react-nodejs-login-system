const express = require('express');
const Account = require('../utils/Account.js');
const config = require('../config.js');
const router = express.Router();

router.post('/', (req, res) => {
	const { todolist } = req.body;
	Account.updateOne(
		{ loginid: req.loginid },
		{ $set: { todolist } },
		(err, item) => {
			if (err) {
				res.status(500).json({
					error: 'Error occured. Please try again.',
				});
			} else {
				res.sendStatus(200);
			}
		}
	);
});

module.exports = router;
