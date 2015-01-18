//import modiles
var mongoose = require('mongoose');
var dbOperator = require('./dbOperator');

//define var
var db = new dbOperator();
var model_menus = null;
var schema_menus = null;

var getSchema_Menus = function()
{
	if(schema_menus == null)
	{
		//define data module
		schema_menus = new mongoose.Schema(
		{
			name : String,
			showOrder : Number
		});
	}
	return schema_menus;
}

var getModel_Menus = function()
{
	if(model_menus == null)
	{
		model_menus = db.getModel("menus", getSchema_Menus());
	}
	return model_menus;
}

module.exports.getModel_Menus = getModel_Menus;
module.exports.getSchema_Menus = getSchema_Menus;





