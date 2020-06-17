import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.scss';

import App from './components/App';
import ScrollTop from './components/ScrollTop';
import store, { saveProductState } from './redux/store';

function Root() { 
  useEffect(() => {
    window.addEventListener('unload', saveProductState);
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <ScrollTop />
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
