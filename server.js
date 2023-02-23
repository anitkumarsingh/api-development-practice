const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./router/bootcamps');

dotenv.config({ path: './config/config.env'});

const PORT = process.env.PORT || 4000;

const app = express();
app.use('/api/v1/bootcamps',bootcamps);


// server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
