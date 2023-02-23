const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env'});

const PORT = process.env.PORT || 4000;

const app = express();

// router
app.get('/api/v1/bootcamps', (req, res) => {
	res.status(200).json({ success: true, msg: 'Retrieve all bootcamps' });
});

app.get('/api/v1/bootcamps/id', (req, res) => {
	res.status(200).json({ success: true, msg: `Retrieve single bootcamp with id ${req.params.id}` });
});
app.post('/api/v1/bootcamps', (req, res) => {
	res.status(200).json({ success: true, msg: `Create bootcamp with` });
});
app.put('/api/v1/bootcamps/id', (req, res) => {
	res.status(200).json({ success: true, msg: `Update bootcamp with id ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/id', (req, res) => {
	res.status(200).json({ success: true, msg: `Delete bootcamp with id ${req.params.id}` });
});


// server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
