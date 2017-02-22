class HomeController {
  constructor($scope, $uibModal, $log) {
    'ngInject';

    this.name = 'home';
    this.items = ['item1', 'item2', 'item3'];
    this.animationsEnabled = true;
    this.$uibModal = $uibModal;
    this.$log = $log;
    this.date = { startDate: moment().subtract(1, 'month'), endDate: moment() };
    this.dateOptions = {
      locale: {
        applyLabel: "Apply",
        fromLabel: "From",
        // format: "YYYY-MM-DD", //will give you 2017-01-06
        // //format: "D-MMM-YY", //will give you 6-Jan-17
        // //format: "D-MMMM-YY", //will give you 6-January-17
        toLabel: "To",
        cancelLabel: 'Cancel',
        customRangeLabel: 'Custom range'
      },
      ranges: {
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'All': [moment('2016-02-01'), moment()],
      }
    }
  }

  open(size, parentSelector) {
    var that = this;
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = this.$uibModal.open({
      animation: this.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      openedClass: 'loader-opened',
      size: 'lg',
      controller: function ($scope, $uibModalInstance, items) {
        'ngInject';

        $scope.items = that.items;
        $scope.selected = {
          item: $scope.items[0]
        };

        $scope.myInterval = 0;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.test = 'test';
        var imageUrls = [];
        if (window.location.href.split('github').length > 1) {
          imageUrls.push('../info-loader/assets/300.jpeg', '../info-loader/assets/400.jpeg')
        } else {
          imageUrls.push('./assets/300.jpeg', './assets/400.jpeg')
        }
        var currIndex = 0;
        var slides = $scope.slides = [];
        for (var i = 0; i < 2; i++) {
          $scope.slides.push(
            {
              header: ['First picture header', 'Second picture header'][slides.length % 2],
              image: imageUrls[slides.length % 2],
              text: ['Short description of picture', 'Point by point explanation of picture', 'That is so cool', 'I love that'][slides.length % 2],
              id: currIndex++
            }
          );
        }

        $scope.ok = function () {
          $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
          console.log('cancel triggered');
          $uibModalInstance.dismiss('cancel');
        }
      },
      appendTo: parentElem,
      resolve: {
        items: function () {
          return that.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      that.selected = selectedItem;
    }, function () {
      that.$log.info('Modal dismissed at: ' + new Date());
    });
  };
}

export default HomeController;
