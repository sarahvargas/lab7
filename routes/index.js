var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	projects["grid"] = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res){
	projects["grid"] = true;
	res.render('index', projects);
}

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event     
    ga("send", "event", 'like', 'click'); 
    $(this).css("background-color", "#7fff00");
}