function publishExternalAPI() {
  'use strict';

  setupModuleLoader(window);

  var ngModule = angular.module('ng', []);
  ngModule.provider('$parse', $ParseProvider);
  ngModule.provider('$rootScope', $RootScopeProvider);
  ngModule.provider('$q', $QProvider);
  ngModule.provider('$$q', $$QProvider);
  ngModule.provider('$compile', $CompileProvider);
  ngModule.provider('$controller', $ControllerProvider);
  ngModule.directive('ngController', ngControllerDirective);
}
