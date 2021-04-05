import React, {Component, lazy, Suspense} from 'react';
import './App.css';
// import MyComponent from './components/myComponent'
const MyComponent = lazy(()=>import('./components/myComponent'));

class App extends Component {
  render(){
    return (
      
      <div className="App">
        <header className="App-header">
            <div>Non lazy component</div><br />
            <Suspense fallback={<div>Loading...</div>}>
                <MyComponent></MyComponent>
            </Suspense> 
        </header>
      </div>
      
    );
  };
}

export default App;
