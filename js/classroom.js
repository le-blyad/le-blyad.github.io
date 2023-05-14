angular.module('tableApp', [])
.controller('HobbyCtrl', function ($scope){
		$scope.persons = [
		{"number": "1", "name": "Колодинов Кирилл", "age":"18"},
		{"number": "2", "name": "Малышева Юлия", "age":"18"},
		{"number": "3", "name": "Жусупов Сергей", "age":"18"},
		{"number": "4", "name": "Хукаленко Данил", "age":"19"},
		{"number": "5", "name": "Ганичев Андрей", "age":"19"},
		{"number": "6", "name": "Лободин Иван", "age":"19"}
		];
})