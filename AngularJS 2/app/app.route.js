"use strict";
var main_1 = require('./component/controllers/main');
exports.AppRoute = [
    {
        path: '',
        component: main_1.MainCtrl,
    },
    {
        path: 'main',
        component: main_1.MainCtrl
    },
    {
        path: 'benchmark/1',
        component: main_1.MainBench1Ctrl
    },
    {
        path: 'benchmark/2',
        component: main_1.MainBench2Ctrl
    },
    {
        path: 'benchmark/3',
        component: main_1.MainBench3Ctrl
    }
];
//# sourceMappingURL=app.route.js.map