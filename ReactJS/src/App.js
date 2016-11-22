import React, { Component } from 'react';
import logo from './logo.svg';
import './css/import.css';

class App extends Component {
  render() {
    return (
        <div className="app-container">
            <div className="works-top">
                <div className="works-menu">
                    <a className="ng-binding" href="benchmark/1">Benchmark 1</a>
                    <a className="ng-binding" href="benchmark/2">Benchmark 2</a>
                    <a className="ng-binding" href="benchmark/3">Benchmark 3</a>
                </div>
            </div>
            <div className="works-container">
                <div className="works-section works-main-section works-section-padding">
                    <div className="works-content-header">
                        <img src={logo} className="works-react-logo" alt="logo" />
                        <h2>React Benchmark</h2>
                    </div>

                    <div class="section-wrapper">
                        <div className="section-inner">
                          <strong>ReactJS</strong> 벤치마킹 환경입니다.<br />
                          상단 메뉴를 이용하여 벤치마크를 진행하시기 바랍니다.
                        </div>

                        <div className="section-inner">
                          <p>벤치마크 항목은 아래와 같습니다.</p>

                          <ul>
                            <li>
                                <strong>Becnmark1</strong>
                                <span>10,000 행에 대한 state loop 성능 검증.</span>
                            </li>
                            <li>
                                <strong>Becnmark2</strong>
                                <span>10,000 행에서 랜덤 삭제에 대한 성능 검증.</span>
                            </li>
                            <li>
                                <strong>Becnmark3</strong>
                                <span>1000 행 20 로우 중첩 state loop에 대한 성능 검증.</span>
                            </li>
                          </ul>
                        </div>

                        <div className="section-inner">
                          <p>해당 벤치마킹 알고리즘은 아래와 같이 동작합니다.</p>

                          <ol>
                            <li>
                                <strong>Component 초기화</strong>
                            </li>
                            <li>
                                <span>사용자가 버튼 클릭 시 배열 혹은 DOM 변경.</span>
                            </li>
                            <li>
                                <strong>setState</strong>
                                <span>를 통한 DOM 교체.</span>
                            </li>
                            <li>
                                <strong>setState callback</strong>
                                <span>을 통한 랜더링 시간 로깅.</span>
                            </li>
                          </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
