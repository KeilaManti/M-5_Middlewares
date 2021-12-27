const controlador = {
	index: (req, res) => {
		res.render('index');
	},
	admin: (req, res) => {
		res.render('admin', { user: req.query.user });
	}
};

module.exports = controlador;