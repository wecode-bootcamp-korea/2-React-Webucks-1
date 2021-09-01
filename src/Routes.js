import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loginchanghyun from './pages/changhyunyoon/Login/Login';
import Listchanghyun from './pages/changhyunyoon/List/List';
import Detailchanghyun from './pages/changhyunyoon/Detail/Detail';

import Loginjungho from './pages/junghoshin/Login/Login';
import Listjungho from './pages/junghoshin/List/List';
import Detailjungho from './pages/junghoshin/Detail/Detail';

import Loginyoonjin from './pages/yoonjinkim/Login/Login';
import Listyoonjin from './pages/yoonjinkim/List/List';
import Detailyoonjin from './pages/yoonjinkim/Detail/Detail';

import Logindonggwon from './pages/donggwonkim/Login/Login';
import Listdonggwon from './pages/donggwonkim/List/List';
import Detaildonggwon from './pages/donggwonkim/Detail/Detail';

import Loginjinsung from './pages/jinsungkim/Login/Login';
import Listjinsung from './pages/jinsungkim/List/List';
import Detailjinsung from './pages/jinsungkim/Detail/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-changhyun" component={Loginchanghyun} />
          <Route exact path="/list-changhyun" component={Listchanghyun} />
          <Route exact path="/detail-changhyun" component={Detailchanghyun} />

          <Route exact path="/login-jungho" component={Loginjungho} />
          <Route exact path="/list-jungho" component={Listjungho} />
          <Route exact path="/detail-jungho" component={Detailjungho} />

          <Route exact path="/login-yoonjin" component={Loginyoonjin} />
          <Route exact path="/list-yoonjin" component={Listyoonjin} />
          <Route exact path="/detail-yoonjin" component={Detailyoonjin} />

          <Route exact path="/login-donggwon" component={Logindonggwon} />
          <Route exact path="/list-donggwon" component={Listdonggwon} />
          <Route exact path="/detail-donggwon" component={Detaildonggwon} />

          <Route exact path="/login-jinsung" component={Loginjinsung} />
          <Route exact path="/list-jinsung" component={Listjinsung} />
          <Route exact path="/detail-jinsung" component={Detailjinsung} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
