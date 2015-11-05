export class OfflineService {
  constructor ($rootScope, $window, $log) {
    'ngInject';

    this.$rootScope = $rootScope;
    this.$log = $log;
    this.navigator = navigator;

    this.online = this.navigator.onLine;

    $window.addEventListener('online', () => this.refresh_());
    $window.addEventListener('offline', () => this.refresh_());
  }

  refresh_() {
    if (this.$rootScope.$$phase) {
      return;
    }

    this.$rootScope.$apply(() => {
      this.online = this.navigator.onLine;
    });
  }
}
