import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'main',
    moduleId: module.id,
    templateUrl: '../views/main/index.html'
})
export class MainCtrl {
};

@Component({
    selector: 'main-bench-1',
    moduleId: module.id,
    templateUrl: '../views/main/benchmark/1.html'
})
export class MainBench1Ctrl {
    private initialized :boolean = false;
    public list :Array<Object> = [];
    private timeStart :number = -1;
    public timeSpend :number = -1;

    benchmark() {
        let bufferList :Array<Object> = [];
        this.list = [];

        for(var i=0; i<10000; i++) {
            bufferList.push({
                idx: i,
                text: 'ITEM ' + i
            });
        }

        this.initialized = true;
        this.timeStart = new Date().getTime();
        this.list = bufferList;
    }

    ngAfterViewChecked() {
        let _this :any = this;
        if(this.initialized === true) {
            this.initialized = false;
            setTimeout(function() {
                _this.timeSpend = (new Date().getTime() - _this.timeStart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }, 0);
        }
    }
};

@Component({
    selector: 'main-bench-2',
    moduleId: module.id,
    templateUrl: '../views/main/benchmark/2.html'
})
export class MainBench2Ctrl {
    private initialized :boolean = false;
    public list :Array<Object> = [];
    private timeStart :number = -1;
    public timeSpend :number = -1;

    constructor() {
        let bufferList :Array<Object> = [];
        let currentTime = new Date().getMilliseconds();
        this.list = [];

        for(let i=0; i<10000; i++) {
            bufferList.push({
                idx: i,
                text: 'ITEM ' + i
            });
        }

        this.list = bufferList;
    }

    benchmark() {
        let bufferList :Array<Object> = this.list;
        for(let i=0; i<5000; i++) {
            let index :number = parseInt((Math.random() * bufferList.length).toString());
            bufferList.splice(index, 1);
        }

        this.initialized = true;
        this.timeStart = new Date().getTime();
        this.list = bufferList;
    }

    ngAfterViewChecked() {
        let _this :any = this;
        if(this.initialized === true) {
            this.initialized = false;
            setTimeout(function() {
                _this.timeSpend = (new Date().getTime() - _this.timeStart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }, 0);
        }
    }
};

@Component({
    selector: 'main-bench-3',
    moduleId: module.id,
    templateUrl: '../views/main/benchmark/3.html'
})
export class MainBench3Ctrl {
    private initialized :boolean = false;
    public list :Array<Object> = [];
    private timeStart :number = -1;
    public timeSpend :number = -1;

    benchmark() {
        let bufferList :Array<Array<Object>> = [];
        let currentTime = new Date().getMilliseconds();
        this.list = [];

        for(let i=0; i<1000; i++) {
            let subList :Array<any> = [];
            for(let j=0; j<20; j++) {
                subList.push({
                    idx: j,
                    text: 'ITEM ' + i + ', ' + j
                });
            }
            bufferList.push(subList);
        }

        this.initialized = true;
        this.timeStart = new Date().getTime();
        this.list = bufferList;
    }

    ngAfterViewChecked() {
        let _this :any = this;
        if(this.initialized === true) {
            this.initialized = false;
            setTimeout(function() {
                _this.timeSpend = (new Date().getTime() - _this.timeStart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }, 0);
        }
    }
};
