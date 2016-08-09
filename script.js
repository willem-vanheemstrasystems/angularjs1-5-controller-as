var myApp = angular
    .module("myModule", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "homeCtrl",
                controllerAs: "ctrl"
            })
            .when("/courses", {
                templateUrl: "templates/courses.html",
                controller: "coursesCtrl",
                controllerAs: "ctrl"
            })
            .when("/students", {
                templateUrl: "templates/students.html",
                controller: "studentsCtrl",
                controllerAs: "ctrl"
            })
            .when("/students/:id", {
                templateUrl: "templates/studentDetails.html",
                controller: "studentDetailsCtrl",
                controllerAs: "ctrl"
            })
            .otherwise({
                redirectTo: "/home"
            })
    })
    .controller("homeCtrl", function() {
        this.pageTitle = "Home";
    })
    .controller("coursesCtrl", function($http) {
        // var vm = this;
        // $http.get("CourseService/GetAllCourses")
        //      .then(function(response) {
        //            vm.courses = response.data;
        //       }, function(reason) {
        //            vm.error = reason.data;
        //       });
        this.courses = [{ id: 1, name: "Ruby" }, { id: 2, name: "JavaScript" }, { id: 3, name: "Python" }];
    })
    .controller("studentsCtrl", function($http) {
        // var vm = this;
        // $http.get("StudentsService/GetAllStudents")
        //      .then(function(response) {
        //            vm.students = response.data;
        //       }, function(reason) {
        //            vm.error = reason.data;
        //       });
        this.students = [{ id: 1, name: "Ben", gender: "Male", city: "London" }, { id: 2, name: "Matt", gender: "Male", city: "New York" }, { id: 3, name: "Pam", gender: "Female", city: "Chennai" }];
    }).controller("studentDetailsCtrl", function($http, $routeParams) {
        // var vm = this;
        // $http({
        //   url: "StudentsService/GetStudent",
        //   params: {id:$routeParams.id},
        //   method: "get"
        // })
        // .then(function(response) {
        //   vm.student = response.data;
        // }, function(reason) {
        //   vm.error = reason.data;
        // });
        var students = [{ id: 1, name: "Ben", gender: "Male", city: "London" }, { id: 2, name: "Matt", gender: "Male", city: "New York" }, { id: 3, name: "Pam", gender: "Female", city: "Chennai" }];
        this.student = students[$routeParams.id-1];
    });
