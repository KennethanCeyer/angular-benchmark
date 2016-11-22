import React, { Component } from 'react';

class Benchmark2 extends Component {
    constructor() {
        super();
        this.timeSpendContent = null;
        this.buttons = [
        ];
        for(var i=0; i<10000; i++) {
            this.buttons.push(<a className="btn btn-force btn-block btn-material" key={i} onClick={(event) => { event.preventDefault(); }}>ITEM {i}</a>);
        }
        this.buttonGroup = <div className="btn-group">{this.buttons}</div>;
    }

    benchmark(event) {
        event.preventDefault();
        var _this = this;
        var timeStart = new Date().getTime();

        for(let i=0; i<5000; i++) {
            let index :number = parseInt((Math.random() * this.buttons.length).toString());
            this.buttons.splice(index, 1);
        }

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
                    <a href="benchmark/1">Benchmark 1</a>
                    <a className="active" href="benchmark/2">Benchmark 2</a>
                    <a href="benchmark/3">Benchmark 3</a>
                </div>
            </div>
            <div className="works-container">
                <div className="works-section works-section-padding">
                    <h2 className="section-title">Benchmark 2</h2>

                    <div className="guide">
                        <p>10,000개의 &lt;a&gt; 태그중 랜덤 5,000개를 삭제합니다.</p>
                        {this.timeSpendContent}
                    </div>

                    <a className="btn btn-material btn-primary btn-xg btn-block" href="#" onClick={this.benchmark.bind(this)}>
                        Delete random 5,000 items.
                    </a>

                    {this.buttonGroup}
                </div>
            </div>
        </div>
      );
    }
}

export default Benchmark2;
