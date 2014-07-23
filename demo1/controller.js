var PhoneListCtrl /*控制器方法名*/ = ['$scope' /*当前作用域*/ , '$http' /*请求*/ ,
	function($scope, $http) {
		// 请求json文件
		$http.get('phones.json').success(function(data) {
			$scope.phones = data;
		});
		// 设置默认排序方式
		$scope.orderProp = 'age';
	}
];