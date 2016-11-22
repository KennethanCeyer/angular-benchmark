app
    .controller('Benchmark3Ctrl', ['$rootScope', '$scope', '$timeout', function($rootScope, $scope, $timeout) {
        $scope.timeSpend = -1;
        $scope.list = [];
        $scope.benchmark = function() {
            var bufferList = [];
            var timeStart = new Date().getTime();

            for(var i=0; i<1000; i++) {
                var subList = [];
                for(var j=0; j<20; j++) {
                    subList.push({
                        idx: j,
                        text: 'ITEM ' + i + ', ' + j
                    });
                }
                bufferList.push(subList);
            }

            $scope.list = bufferList;

            $timeout(function() {
                $scope.timeSpend = (new Date().getTime() - timeStart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }, 0);
        };
    }]);
