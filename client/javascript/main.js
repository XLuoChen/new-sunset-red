import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import App from './components/App';
import HelloWorld from './components/HelloWorld';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HelloWorld}/>
    </Route>
  </Router>
  , document.getElementById("main")
);
