var http = require('http');

var redirect_welcome = function(req, res)
{
    res.render('welcome.html');
};

module.exports = redirect_welcome;
