import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';

import Benchmark1 from './Benchmark1';
import Benchmark2 from './Benchmark2';
import Benchmark3 from './Benchmark3';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/benchmark/1" component={Benchmark1} />
            <Route path="/benchmark/2" component={Benchmark2} />
            <Route path="/benchmark/3" component={Benchmark3} />
            <Route path="*" component={App} />
        </Router>
    ),
    document.getElementById('app')
);
