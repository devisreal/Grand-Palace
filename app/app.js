var myModule = angular.module('myModule',['ngRoute']);

myModule.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    })
    .when('/our-dishes',{
        templateUrl: 'view/dishes.html',
        controller: 'DishesController'
    })
    .when('/aboutus',{
        templateUrl: 'view/about.html',
        controller: 'AboutController'
    })
    .when('/contactus',{
        templateUrl: 'view/contact.html',
        controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);


myModule.controller('HomeController', ['$scope', function($scope) {
    AOS.init();
    $scope.image1 = {carousel : 'content/img/Carousel/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg'}
    $scope.image2 = {carousel : 'content/img/Carousel/louis-hansel-k2ZCm7LCj8E-unsplash.jpg'}
    $scope.image3 = {carousel : 'content/img/Carousel/Depositphotos_198022492_s-2019.jpg'}
    $scope.image4 = {carousel : 'content/img/Carousel/pexels-andrea-piacquadio-3801426.jpg'}
    $scope.image5 = {carousel : 'content/img/Carousel/toa-heftiba-5JeTin55H9U-unsplash.jpg'}
    // Cards------OUR DISHES PAGE === Young_Justice_ S1E26
    $scope.cards = [
        {
            name: "Jollof Rice and Chicken",
            price: 2500,
            image: "content/img/freshimages/pexels-rajesh-tp-1624487.jpg"
            
        },
        {
            name: "Pounded Yam with Vegetable Soup",
            price: 3000,
            image: "content/img/freshimages/64a0f6bfe8d45fa3d1404d52b53af518..2.jpg"
        },
        {
            name: "White Rice, Pasta with Chicken",
            price: 1200,
            image: "content/img/freshimages/rakhmat-suwandi-aseI9y_OCHs-unsplash.jpg"
        },
        {
            name: "Amala with Ewedu Soup",
            price: 1250,
            image: "content/img/freshimages/amala_ewedu.jpg"
        }
    ]

}])


myModule.controller('DishesController', ['$scope', function($scope){
    $scope.image = {common: 'content/img/Common/pizza.jpg'}
}])

myModule.controller('AboutController', ['$scope', function($scope){
    $scope.image = {common: 'content/img/Common/pizza.jpg'}
}])

myModule.controller('ContactController', ['$scope', function($scope){
   $scope.image = {common: 'content/img/Common/pizza.jpg'}
}])