(function () {
  'use strict';

  RAML.Directives.resources = function(ramlParserWrapper) {
    return {
      restrict: 'E',
      templateUrl: 'resources/resources.tpl.html',
      replace: true,
      scope: {
        src: '@'
      },
      controller: function($scope, $window, $attrs) {
        $scope.proxy = $window.RAML.Settings.proxy;

        if ($attrs.hasOwnProperty('withTryItOnFullscreen')) {
          $scope.withTryItOnFullscreen = true;
        }

        if ($attrs.hasOwnProperty('disableThemeSwitcher')) {
          $scope.disableThemeSwitcher = true;
        }

        if ($scope.src) {
          ramlParserWrapper.load($scope.src);
        }

        $scope.updateProxyConfig = function (status) {
          $window.RAML.Settings.disableProxy = status;
        };

        $scope.toggle = function ($event) {
          var $this    = jQuery($event.currentTarget);
          var $section = $this
            .closest('.raml-console-resource-list-item')
            .find('.raml-console-resource-list');

          if ($section.hasClass('raml-console-is-collapsed')) {
            $section.velocity('slideDown', {
              duration: 200
            });
          } else {
            $section.velocity('slideUp', {
              duration: 200
            });
          }

          $section.toggleClass('raml-console-is-collapsed');
          $this.toggleClass('raml-console-is-active');
        };

        $scope.collapseAll = function ($event) {
          var $this = jQuery($event.currentTarget);

          if ($this.hasClass('raml-console-resources-expanded')) {
            $this.text('expand all');
            $this.removeClass('raml-console-resources-expanded');
            jQuery('body').find('.raml-console-resource-list-root ol.raml-console-resource-list').velocity('slideUp', {
              duration: 200
            });
          } else {
            $this.text('collapse all');
            $this.addClass('raml-console-resources-expanded');
            jQuery('body').find('.raml-console-resource-list-root ol.raml-console-resource-list').velocity('slideDown', {
              duration: 200
            });
          }

          jQuery('body').find('.raml-console-resource-list-root ol.raml-console-resource-list').toggleClass('raml-console-is-collapsed');
          jQuery('body').find('.raml-console-resource-list-root li.raml-console-resource-list-item header button.raml-console-resource-root-toggle').toggleClass('raml-console-is-active');
        };
      },
      link: function($scope) {
        ramlParserWrapper.onParseSuccess(function(raml) {
          $scope.raml = RAML.Inspector.create(raml);
          $scope.loaded = true;
        });
      }
    };
  };

  angular.module('RAML.Directives')
    .directive('ramlConsole', RAML.Directives.resources);
})();
