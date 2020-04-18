const express = require('express');
const Account = require('../utils/Account.js');
const config = require('../config.js');
const router = express.Router();

router.get('/', (req, res) => {
	Account.findOne({ loginid: req.loginid }, (err, result) => {
		if (err) {
			res.status(500).json({
				error: 'Error occured. Please try again.',
			});
		} else {
			res.status(200).send(result.todolist);
		}
	});
});

module.exports = router;
