// import React from 'react';
// import ReactDOM from 'react-dom';
// import Routes from './Routes';
// import './styles/reset.scss';

// ReactDOM.render(<Routes />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
// Global CSS
import './styles/reset.scss';
import './styles/common.scss';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);
