import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import uiBootstrap from 'angular-ui-bootstrap';
import moment from 'moment/moment.js';
import 'bootstrap-daterangepicker/daterangepicker.css';
import bootstrapdate from 'bootstrap-daterangepicker/daterangepicker';
import daterangepicker from 'angular-daterangepicker';

// import 'normalize.css';
window.moment = moment;

angular.module('app', [
  uiRouter,
  Common,
  Components,
  uiBootstrap,
  daterangepicker
])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
