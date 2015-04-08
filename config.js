// export the port number and database
// dabase username and password and clear for security reasons
module.exports = {
	'port': process.env.PORT || 8080,
    'database': 'mongodb://<username>:<password>D@ds035280.mongolab.com:35280/firststack'
};