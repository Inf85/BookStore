﻿var booksApp = angular.module("booksApp", ["ngRoute"]);


booksApp.controller("booksController", function ($scope, $http) {
    $scope.formData = {};

    $scope.AddBook = { visible: false };
//    $scope.BookEdit = { visible: false };


    $scope.AddBooks = function () {
        $scope.AddBook = { visible: true };
    }


    $scope.Close = function () {
        $scope.AddBook = { visible: false };
    }


    $http.get('/api/books/').success(function (data) {
        $scope.books = data;
    }).error(function (data) {
        alert("ERROR");
    });

    $http.get('/api/authors/').success(function (data) {
        $scope.authors = data;
    }).error(function (data) {
        alert("ERROR");
    });

    $scope.Details = { visible: false };
    
    $scope.getBookDetails = function(book)
    {
        $http.get('/api/books/'+book.Id).success(function (data) {
            $scope.booksD = data;
            $scope.Details = { visible: true };
        }).error(function (data) {
            alert("ERROR");
        });
    }

   


    


});