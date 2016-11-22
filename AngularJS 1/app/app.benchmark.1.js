app
    .controller('Benchmark1Ctrl', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {
        $scope.timeSpend = -1;
        $scope.list = [];
        $scope.benchmark = function() {
            var bufferList = [];
            var timeStart = new Date().getTime();

            for(var i=0; i<10000; i++) {
                bufferList.push({
                    idx: i,
                    text: 'ITEM ' + i
                });
            }

            $scope.list = bufferList;

            $timeout(function() {
                $scope.timeSpend = (new Date().getTime() - timeStart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }, 0);
        };
    }]);
