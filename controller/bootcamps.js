const getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Retrieve all bootcamps' });
};
const getBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Retrieve single bootcamp with id ${req.params.id}` });
};
const createBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Create bootcamp with` });
};
const updateBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Update bootcamp with id ${req.params.id}` });
};
const deleteBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Delete bootcamp with id ${req.params.id}` });
};

module.exports = {
	getBootcamps,
	getBootcamp,
	createBootcamp,
	updateBootcamp,
	deleteBootcamp
};
