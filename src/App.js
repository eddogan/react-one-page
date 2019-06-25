import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/header';
import Featured from './components/featured/index';

function App() {
  return (
    <div className="App" style={{height: '1500px', background: '#ddd'}}>
      <header className="App-header">
        <Header />
      </header>
      <Featured />
    </div>
  );
}

export default App;
