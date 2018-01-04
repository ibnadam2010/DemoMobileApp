document.addEventListener('deviceready', function(){


},false);

var app=angular.module('app', []);

app.config(function($RouteProvider){

  $RouteProvider
    .when('home', {templateUrl: 'partials/home.html'})
    .when('about', {templateUrl: '../partials/about.html'})
    .otherwhise({redirectTo: '/home'})

})
alert('ok');
