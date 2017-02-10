import uiRouter from 'angular-ui-router';

//components
import appComponent from './app.component';

import components from './components';

const app = angular.module('app', [
    uiRouter,
    components.name
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        template: '<app></app>'
    }).state('app.home', {
        name: 'home',
        url: '/home',
        component: 'home'
    }).state('app.products', {
        name: 'products',
        url: '/products',
        template: '<products></products>'
    });


    $urlRouterProvider.otherwise('/app/home');
}]);

app.component('app', appComponent);

export default app;