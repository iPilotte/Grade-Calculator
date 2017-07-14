import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../assets/css/App.css';
import GradeCal from './GradeCal';

class App extends Component {
  render() {
    return (
      <Grid fluid='true'>
        <Row>
          <Col md={8} mdOffset={2} xs={10} xsOffset={1} className='card'>
            <h3>Hello</h3>
            <hr/>
            <GradeCal/>
            <hr/>
            <h4>Thanks.</h4>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
