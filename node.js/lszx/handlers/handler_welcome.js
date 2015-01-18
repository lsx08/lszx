var http = require('http');
var db_menus = require('../models/db_menus');

var handler_index = function(req, res)
{
    var model_menus = db_menus.getModel_Menus();
    model_menus.find({}, "-_id").sort("showOrder").exec(function(err, result)
    {
        if(err != null)
        {
            console.error(err);
            return;
        }
        else
        {
            res.json(result);
        }
    });
};

module.exports = handler_index;
