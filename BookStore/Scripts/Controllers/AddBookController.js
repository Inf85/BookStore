var booksApp = angular.module("booksApp");


booksApp.controller("addbookController", function ($scope, $http) {

    $scope.submit = function () {
       
        var id = parseInt($scope.authorsList.Id);
        var book = {
            AuthorId: id,// authorsList.Id,

            Title: $scope.Title,
            Year: $scope.Year,
            Price: $scope.Price,
            Genre: $scope.Genre
        };

        $http.post('/api/books', book).success(function (data) { alert("Запись добавлена"); }).error(function (response) {
            $scope.errors = "";
            $scope.errors = response.Message;
        })
    }
});