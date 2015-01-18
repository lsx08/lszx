/**
 * 欢迎页面的module
 */

var module_welcome = angular.module("module_welcome", []);

module_welcome.controller("controller_title", function($scope)
{
	$scope.title = "鸾瑟在线";
});

module_welcome.controller("controller_menus", function($scope, $http)
{

	$http.get("/data/welcome").success(function(data)
	{
		$scope.menus = data;
	});
});

