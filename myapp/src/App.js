import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={apiResponse:""};
  }

  callAPI(){
      fetch("http://184.73.69.236:4000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
      this.callAPI();
  }


render(){
return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Simple React App
      </p>
    </header>
    <p>{this.state.apiResponse}</p>
  </div>
);
}
}

export default App;
