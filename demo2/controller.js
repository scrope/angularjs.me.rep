// 自定义控制器
var PhoneListCtrl = ['$scope', '$http',
	function($scope, $http) {
		$http.get('phones.json').success(function(data) {
			$scope.phones = data;
		});

		$scope.orderProp = 'age';
	}
];

// 自定义控制器
var PhoneDetailCtrl = ['$scope', '$routeParams' /*参数*/ , '$http',
	function($scope, $routeParams, $http) {
		$http.get($routeParams.phoneId + '.json').success(function(data) {
			$scope.phone = data;
			$scope.mainImageUrl = data.images[0];
		});

		// 自定义当前作用域函数
		$scope.setImage = function(imageUrl) {
			$scope.mainImageUrl = imageUrl;
		};
	}
];