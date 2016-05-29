var booksApp = angular.module("booksApp");

booksApp.controller("EditBookController", function ($scope, $http) {
    $scope.EditBook = function (book) {
        $http.get('/api/books/' + book.Id).success(function (data) {
            $scope.booksList = data;
        }).error(function (data) {
            alert("ERROR");
        });

    }
});