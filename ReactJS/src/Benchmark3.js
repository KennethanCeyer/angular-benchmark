import React, { Component } from 'react';

class Benchmark2 extends Component {
    constructor() {
        super();
        this.timeSpendContent = null;
        this.table = null;
    }

    benchmark(event) {
        event.preventDefault();
        var _this = this;
        var timeStart = new Date().getTime();

        this.rows = [];

        for(var i=0; i<1000; i++) {
            var cols = [];
            for(var j=0; j<20; j++) {
                cols.push(<td>ITEM {i}, {j}</td>);
            }
            this.rows.push(<tr>{cols}</tr>);
        }

        this.table = <table className="table table-bordered">{this.rows}</table>

        this.setState({
            table: this.table
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
                    <a href="benchmark/2">Benchmark 2</a>
                    <a className="active" href="benchmark/3">Benchmark 3</a>
                </div>
            </div>
            <div className="works-container">
                <div className="works-section works-section-padding">
                    <h2 className="section-title">Benchmark 3</h2>

                    <div className="guide">
                        <p>1000개의 행의 20개의 열의 테이블을 만듭니다.</p>
                        {this.timeSpendContent}
                    </div>

                    <a className="btn btn-material btn-primary btn-xg btn-block" href="#" onClick={this.benchmark.bind(this)}>
                        Create table
                    </a>

                    {this.table}
                </div>
            </div>
        </div>
      );
    }
}

export default Benchmark2;
