'use strict';


angular.module('ahoyApp', [
  'ahoyApp.config',
  'ahoyApp.directives',
  'ahoyApp.factories',
  'ahoyApp.services',
  'ahoyApp.controllers',
  'ui.router',
  'ui.bootstrap',
  'timer',
  'ngSanitize',
  'localytics.directives',
  'pascalprecht.translate'
])

.run(
  [ '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ui-sref-active="active }"> will set the <li> // to active whenever
    // 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
/*      $('input[type="checkbox"].large').checkbox({
        buttonStyle: 'btn-link btn-large',
        checkedClass: 'icon-check',
        uncheckedClass: 'icon-check-empty'
      }); */
    }
  ]
)
.config(
  [ '$stateProvider', '$urlRouterProvider', '$translateProvider', 'AHOY_CONFIG',
    function ($stateProvider, $urlRouterProvider, $translateProvider, AHOY_CONFIG) {

      $stateProvider
        .state("joinRoom", {
          url: '/join/:room?lang',
          templateUrl: 'tpl/join.html',
          controller: 'JoinCtrl'
        })

        .state("joinRoomWithName", {
          url: '/join/:room/:name?lang',
          templateUrl: 'tpl/join.html',
          controller: 'JoinCtrl'
        })

        .state("join", {
          url: '/join?lang',
          templateUrl: 'tpl/join.html',
          controller: 'JoinCtrl'
        })

        .state("link", {
          url: '/link/:token',
          templateUrl: 'tpl/join.html',
          controller: 'LinkCtrl'
        })

        .state("mediasharing", {
          url: '/mediasharing',
          templateUrl: 'tpl/mediasharing.html',
          controller: 'MediaShareCtrl'
        })

        .state("nousermedia", {
          url: '/nousermedia',
          templateUrl: 'tpl/nousermedia.html',
          controller: 'MediaShareCtrl'
        })
		
		.state("nousermedia_plugin", {
          url: '/nousermedia_plugin',
          templateUrl: 'tpl/nousermedia_plugin.html',
          controller: 'MediaShareCtrl'
        })
        
        .state("conference", {
          url: '/conference',
          templateUrl: 'tpl/conference.html',
          controller: 'ConferenceCtrl'
        })

        .state("view", {
          url: '/view/:room',
          templateUrl: 'tpl/view.html',
          controller: 'ViewCtrl'
        })

      if (AHOY_CONFIG.allow_dynamic_conferences) {
        $stateProvider
          .state("start", {
            url: '/start?lang',
            templateUrl: 'tpl/start.html',
            controller: 'StartCtrl'
          })

        $urlRouterProvider
          .otherwise('/start');
      } else {
        $urlRouterProvider
          .otherwise('/join');
      }

      $translateProvider.useStaticFilesLoader({
          prefix: 'i18n/',
          suffix: '.json'
        });
      $translateProvider.preferredLanguage('en');
    }
  ]
);
