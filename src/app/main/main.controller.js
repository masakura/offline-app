export class MainController {
  constructor ($rootScope, $timeout, offlineService, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1446706001372;
    this.toastr = toastr;

    this.activate($rootScope, $timeout, offlineService, webDevTec);
  }

  activate($rootScope, $timeout, offlineService, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);

    $rootScope.$watch(() => offlineService.online, () => {
      this.classes = {
        online: offlineService.online,
        offline: !offlineService.online
      }
    });
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
