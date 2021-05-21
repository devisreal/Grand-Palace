var myModule = angular.module('myModule',['ngRoute']);

myModule.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    })
    .when('/home',{
        templateUrl: 'view/home.html',
        controller: 'HomeController'
    })
    .when('/menu',{
        templateUrl: 'view/menu.html',
        controller: 'MenuController'
    })
    .when('/about',{
        templateUrl: 'view/about.html',
        controller: 'AboutController'
    })
    .when('/contact',{
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
    $scope.spices ={image: 'content/img/Home_Page/restaurant.jpg'}
    $scope.menu = {icon: 'content/icons/menu.png'}
    $scope.fastfood = {icon: 'content/icons/fast-food.png'}
    $scope.tray = {icon: 'content/icons/fast.png'}
    // specialties
    $scope.snack = {specimen: 'content/img/Home_Page/fastfood.jpg'}
    $scope.foreign = {specimen: 'content/img/Home_Page/foreign.jpg'}
    $scope.local = {specimen: 'content/img/Home_Page/J-rice.jpg'}
    $scope.drinks = {specimen: 'content/img/Home_Page/20210510_131037.jpg'}
    // our chef content/img/Home_Page/
    $scope.lukesimon ={image: 'content/img/Home_Page/luke-simon.jpg'}
    $scope.rebecca ={image: 'content/img/Home_Page/rebecca.jpg'}
    $scope.martinyoung ={image: 'content/img/Home_Page/martin-young.jpg'}
    $scope.johnsmith = {image: 'content/img/Home_Page/john-smith.jpg'}
    // head chef
    $scope.headchef ={image: 'content/img/Home_Page/head-chef.jpg'}
    $scope.headchefbg = {image: 'content/img/Home_Page/kaboom.jpg'}
    // reservation
    $scope.reservation = {image: 'content/img/Home_Page/spag.jpg'}
    // testtimonies
    $scope.firsttestimony = {image: 'content/img/Home_Page/Isttestimony.jpg'}
    $scope.secondtestimony = {image: 'content/img/Home_Page/2ndtestimony.jpg'}
    $scope.thirdtestimony = {image: 'content/img/Home_Page/3rdtestimony.jpg'}

}])

// MENU PAGE CONTROLLER
myModule.controller('MenuController', ['$scope', '$http', function($scope,$http){
    AOS.init();
    $scope.image = {common: 'content/img/Common/pizza.jpg'}
    $scope.fastfoodmenu = {icon: 'content/icons/fast-food (1).png'}
    $scope.coffeecupmenu = {icon: 'content/icons/coffee-cup.png'}
    $scope.healthyfoodmenu = {icon: 'content/icons/nutrition.png'}
    $scope.desserts = [
        {
            name:"Chocolate Mousse",
            image: "content/img/freshimages/Dessert/chocolate-mousse.jpg"
        },
        {
            name:"Slice Cake",
            image: "content/img/freshimages/Dessert/slice-cake.jpg"
        },
        {
            name:"Strawberry Cupcake",
            image: "content/img/freshimages/Dessert/strawberrycupcake.jpg"
        },
        {
            name:"Pretzels",
            image: "content/img/freshimages/Dessert/pretzels.jpg"
        }
    ]
    
    $(function () {
            var search = $(".classinitial");
            var bar = $("#searchbar")
            $(".tab-pane").scroll(function () {
                var scroll = $(".tab-pane").scrollTop();
  
                if (scroll >= 100) {
                    search.removeClass('classinitial')
                            .addClass("classfinal");
                    bar.addClass("searchbar")
                } else {
                    search.removeClass("classfinal")
                            .addClass('classinitial');
                    bar.removeClass("searchbar")                            
                }
            });
            // SEARCH-BAR TWO
            var search2 = $(".classinitial");
            var bar2 = $("#searchbar2")
            $(".tab-pane2").scroll(function () {
                var scroll = $(".tab-pane2").scrollTop();
  
                if (scroll >= 100) {
                    search2.removeClass('classinitial')
                            .addClass("classfinal");
                    bar2.addClass("searchbar")
                } else {
                    search2.removeClass("classfinal")
                            .addClass('classinitial');
                    bar2.removeClass("searchbar")                            
                }
            });
             // SEARCH-BAR THREE
            var search3 = $(".classinitial");
            var bar3 = $("#searchbar3")
            $(".tab-pane3").scroll(function () {
                var scroll = $(".tab-pane3").scrollTop();
  
                if (scroll >= 100) {
                    search3.removeClass('classinitial')
                            .addClass("classfinal");
                    bar2.addClass("searchbar")
                } else {
                    search3.removeClass("classfinal")
                            .addClass('classinitial');
                    bar3.removeClass("searchbar")                            
                }
            });
            // SEARCH-BAR FOUR
            var search4 = $(".classinitial");
            var bar4 = $("#searchbar4")
            $(".tab-pane4").scroll(function () {
                var scroll = $(".tab-pane4").scrollTop();
  
                if (scroll >= 100) {
                    search4.removeClass('classinitial')
                            .addClass("classfinal");
                    bar4.addClass("searchbar")
                } else {
                    search4.removeClass("classfinal")
                            .addClass('classinitial');
                    bar4.removeClass("searchbar")                            
                }
            });
            
        });
        
        $(document).ready(
            function(){
                $("#searchactive").click(
                    function(){
                        $("#searchbar").toggle(500);
                    })
                    // SEARCH ICON TWO
                $("#searchactive2").click(
                    function(){
                        $("#searchbar2").toggle(500);
                    })
                    // SEARCH ICON THREE
                    $("#searchactive3").click(
                    function(){
                        $("#searchbar3").toggle(500);
                    })
                    // SEARCH ICON FOUR
                    $("#searchactive4").click(
                    function(){
                        $("#searchbar4").toggle(500);
                    })
            });

    $http.get('data/african.json').then(function (response) {
        console.log(response.data);
        $scope.africanfood = response.data;
    });

    $http.get('data/foreign.json').then(function (response) {
        console.log(response.data);
        $scope.foreignfood = response.data;
        
    });

    $http.get('data/fastfood.json').then(function (response) {
        console.log(response.data);
        $scope.fastfood = response.data;
    });

    $http.get('data/drinks.json').then(function (response) {
        console.log(response.data);
        $scope.drinks = response.data;
    });
}])


// ABOUT PAGE CONTROLLER
myModule.controller('AboutController', ['$scope', function($scope){
    AOS.init();
    $scope.image = {common: 'content/img/Common/pizza.jpg'}

    
}])

// CONTACT PAGE CONTROLLER
myModule.controller('ContactController', ['$scope', function($scope){
    AOS.init();
   $scope.image = {common: 'content/img/Common/pizza.jpg'}
}])