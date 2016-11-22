import React, { Component } from 'react';

class Benchmark1 extends Component {
    constructor() {
        super();
        this.timeSpendContent = null;
        this.buttonGroup = null;
        this.buttons = [
        ];
    }

    benchmark(event) {
        event.preventDefault();
        var _this = this;
        for(var i=0; i<10000; i++) {
            this.buttons.push(<a className="btn btn-force btn-block btn-material" key={i} onClick={(event) => { event.preventDefault(); }}>ITEM {i}</a>);
        }
        this.buttonGroup = <div className="btn-group">{this.buttons}</div>;

        var timeStart = new Date().getTime();
        this.setState({
            buttonGroup: this.buttonGroup
        }, function() {
            _this.timeSpend = (new Date().getTime() - timeStart).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            _this.timeLogging(_this.timeSpend);
        });
    }

    timeLogging(time) {
        this.timeSpendContent = <p className="guide-time">
            <strong>랜더링 반영시간</strong>
            <span>{time} ms</span>
        </p>;
        
        this.setState({
            timeSpendContent: this.timeSpendContent
        });
    }

    render() {
      return (
        <div className="app-container">
            <div className="works-top">
                <div className="works-menu">
                    <a className="active" href="benchmark/1">Benchmark 1</a>
                    <a href="benchmark/2">Benchmark 2</a>
                    <a href="benchmark/3">Benchmark 3</a>
                </div>
            </div>
            <div className="works-container">
                <div className="works-section works-section-padding">
                    <h2 className="section-title">Benchmark 1</h2>

                    <div className="guide">
                        <p>10,000개의 &lt;a&gt; 태그를 생성하는 작업의 시간을 측정 합니다.</p>
                        {this.timeSpendContent}
                    </div>

                    <a className="btn btn-material btn-primary btn-xg btn-block" href="#" onClick={this.benchmark.bind(this)}>
                        Create 10,000 elements
                    </a>

                    {this.buttonGroup}
                </div>
            </div>
        </div>
      );
    }
}

export default Benchmark1;
