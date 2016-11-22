app
    .directive('a', function () {
        return {
            restrict: 'E',
            priority: 3,
            link: function (scope, elem, attrs) {
                if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                    elem.on('click', function (e) {
                        e.preventDefault();
                    });
                }
            }
        }
    });
