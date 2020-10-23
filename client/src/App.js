import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
          <Route exact path={process.env.PUBLIC_URL + "/saved"} component={Saved} />
          <Route path={process.env.PUBLIC_URL + "*"} component={Search} />
          </Switch>
      </div>
    </Router>
  );
}


export default App;
