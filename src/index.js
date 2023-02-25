import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Switch>
  <BrowserRouter>
    
      <App />
    </BrowserRouter>
    </Switch>
  ,
    document.getElementById("root")
  );


registerServiceWorker();
