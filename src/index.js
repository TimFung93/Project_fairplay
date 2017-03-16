import React                        from 'react';
import ReactDOM                     from 'react-dom';
import Header                       from './static/Header';
import Bubblesort                   from './Components/Bubblesort';
import Selectionsort                from './Components/Selectionsort';
import Insertionsort                from './Components/Insertionsort';
import Compare                         from './Components/Compare';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';





ReactDOM.render((
  <Router history={browserHistory} >
  	<Route path='/' component={Header} >
  		<IndexRoute component={Bubblesort} />
  		<Route path="Selectionsort" component={Selectionsort} />
  		<Route path="Insertionsort" component={Insertionsort} />
      <Route path="Compare" component={Compare} />
  	</Route>
  </Router>
  ),document.getElementById('app'));
