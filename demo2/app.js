// 自定义一个过滤器
angular.module('phonecatFilters', []).filter('checkmark', function() {

	return function(input) {

		return input ? '\u2713' : '\u2718';

	};

});

// 设置路由
angular.module('phonecat' /*作用域*/ , ['phonecatFilters']).config(['$routeProvider',
	function($routeProvider) {

		// 路由Map
		var map = [{
			path: '/phones',
			url: 'phone-list.html',
			ctl: PhoneListCtrl
		}, {
			path: '/phones/:phoneId', //:后当成参数传入
			url: 'phone-detail.html',
			ctl: PhoneDetailCtrl
		}];

		// 逐一注册
		for (var i = 0; i < map.length; i++) {
			$routeProvider.when(map[i].path, {
				templateUrl: map[i].url,
				controller: map[i].ctl
			});
		};

		// 注册默认请求
		$routeProvider.otherwise({
			redirectTo: '/phones'
		});

	}

]);