var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var random_num = Math.random();
	console.log(random_num);

	if (random_num >= 0) {
	  projects['grid'] = false;
	  res.render('index', projects);
	} else {
	  res.redirect('/grid');
	}
};

exports.viewGrid = function(req, res){
	console.log("in here");
	projects["grid"] = true;
	res.render('index', projects);
}

