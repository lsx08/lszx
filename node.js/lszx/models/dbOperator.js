var mongoose = require('mongoose');
var dbConfig = require('./dbConfigs');

var dbOperator = function()
{
	var conn = null;
	var model = null;
	return{
		getDbConnect : function()
		{
			return mongoose.createConnection(dbConfig.dbUrl);
		},

		getModel : function(modelName, schema)
		{
			if(model == null)
			{
				if(conn == null)
				{
					conn = this.getDbConnect();
				}
				model = conn.model(modelName, schema);
			}
			return model;
		}
	}
}

module.exports = dbOperator;
