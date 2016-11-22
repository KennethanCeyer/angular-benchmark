import { Routes } from '@angular/router';

import { MainCtrl, MainBench1Ctrl, MainBench2Ctrl, MainBench3Ctrl } from './component/controllers/main';

export const AppRoute: Routes = [
    {
        path: '',
        component: MainCtrl,
    },
    {
        path: 'main',
        component: MainCtrl
    },
    {
        path: 'benchmark/1',
        component: MainBench1Ctrl
    },
    {
        path: 'benchmark/2',
        component: MainBench2Ctrl
    },
    {
        path: 'benchmark/3',
        component: MainBench3Ctrl
    }
];
