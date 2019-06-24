import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/header';

function App() {
  return (
    <div className="App" style={{height: '1500px'}}>
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
