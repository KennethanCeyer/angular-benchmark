import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoute } from './app.route';
import { AppComponent } from './app.component';

import { MainCtrl, MainBench1Ctrl, MainBench2Ctrl, MainBench3Ctrl } from './component/controllers/main';
import { DirectiveCoreAnchorPreventDefault } from './component/directives/directive.core';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoute)
    ],
    declarations: [
        AppComponent,

        MainCtrl,
        MainBench1Ctrl,
        MainBench2Ctrl,
        MainBench3Ctrl,

        DirectiveCoreAnchorPreventDefault
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
