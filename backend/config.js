module.exports = {
	jwtSecret: 'simplereactnodejslogin',
	jwtSignOptions: { expiresIn: '1h' },
	mongoUri: '{MONGODB_LOCATION}',
	port: process.env.PORT || 3001,
	saltRound: 10,
};
