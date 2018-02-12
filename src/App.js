import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/ResizeObserver/Content'
import Accordion from './components/Accordion'

class App extends Component {

  state = {
    active: false,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => this.setState({ active: !this.state.active })}>{this.state.active ? 'deactivate' : 'activate'}</button>
        </div>
        <Accordion
          multiActive
          panes={[
            {
              key: 'test1',
              renderTitle: (props) => <Accordion.Title {...props} title={'Title 1'}/>,
              renderContent: ({ innerRef }) => <Content innerRef={innerRef} />
            },
            {
              key: 'test2',
              renderTitle: (props) => <Accordion.Title {...props} title={'Title 2'}/>,
              renderContent: ({ innerRef }) => <Content innerRef={innerRef} />
            },
            {
              key: 'test3',
              renderTitle: (props) => <Accordion.Title {...props} title={'Title 3'}/>,
              renderContent: ({ innerRef }) => <Content innerRef={innerRef} />
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
