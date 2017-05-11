import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Table from './components/table';
import Member from './components/member';
import * as BS from 'react-bootstrap';

class App extends Component {

  render() {
    
    return (
      <div>
        <BS.Col 
        lg={4}        
        >
          <Table members={this.props.members}
          />
        </BS.Col>

        <BS.Col lg={4} lgOffset={3} className="member">
          <Member/>
        </BS.Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  }
}

export default connect(mapStateToProps)(App);
