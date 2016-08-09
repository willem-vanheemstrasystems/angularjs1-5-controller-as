# angularjs1-5-controller-as
AngularJS 1.5 Controller As

Based on 'Controller As' at https://www.youtube.com/watch?v=6fAi8xDCq4w&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=32

#Controller As

With the controllerAs syntax we do not need to inject the $scope service into the controller function. 

Before:

```javascript
var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        $scope.message = "Hello Angular";
    });
```

```javascript
[...]
    <div data-ng-controller="myController">{{ message }}</div>
[...]
```

Instead we will be using the 'this' object to attach properties to, to make them available in the view.

After:

```javascript
var myApp = angular
    .module("myModule", [])
    .controller("myController", function() {
        this.message = "Hello Angular";
    });
```

```javascript
[...]
    <div data-ng-controller="myController as ctrl">{{ ctrl.message }}</div>
[...]
```

It is recommended to name the controller as simply 'ctrl', the default used by Angular.

When using the controllerAs syntax, if you use the 'this' keyword inside a 'then()' function you won't get the result you expect. 
That is because the 'this' keyword inside the 'then()' function points to the 'window object' when the control comes to the 'then()' function.

Instead create a variable (e.g. ***vm*** for view model) that references the 'this' keyword.

```javascript
var vm = this;
```

You can then use 'vm' inside the 'then' function, and it will work as expected:

```javascript
var vm = this;
[...]
    .then(function(response) { 
        vm.students = response.data;
    })
[...]
```

See script.js, index.html and styles.css how this is implemented.
