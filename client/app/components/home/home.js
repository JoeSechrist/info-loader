import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import moment from 'moment/min/moment.min.js';

let homeModule = angular.module('home', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
  
.name;

export default homeModule;
