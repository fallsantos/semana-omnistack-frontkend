import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
