import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Table from './components/table';
import Member from './components/member';
import * as BS from 'react-bootstrap';

class App extends Component {

  render() {
    
    return (      
        <div className='app-container'>
          <div className='header'>
              <h1>Select Your Council Member</h1>                
          </div>
          <BS.Row>
            <BS.Col 
              lg={4}            
            >
              <Table members={this.props.members}
              />
            </BS.Col>
              <Member/>
          </BS.Row>      
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

// <BS.Col lg={4} lgOffset={2} className="member">
            // <Member/>
          // </BS.Col>