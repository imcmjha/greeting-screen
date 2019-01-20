import * as React from 'react';
import './App.css';

import Home from 'src/components/home';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>  
    );
  }
}

export default App;
