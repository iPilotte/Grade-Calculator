import React, { Component } from 'react';
import {Grid, Row, Col, Button , Form, FormControl , FormGroup, ControlLabel} from 'react-bootstrap';

class GradeCal extends Component {
  render() {
    return (
      <div>
          <Row>
            <Col md={3} mdOffset={3} xs={4} xsOffset={2}>
                <FormGroup>
                    <ControlLabel>CA</ControlLabel>
                    <FormControl type='number' placeholder='CA'/>
                </FormGroup>
            </Col>
            <Col md={3} xs={4}>
                <FormGroup>
                    <ControlLabel>GPA</ControlLabel>
                    <FormControl type='number' placeholder='GPA'/>
                </FormGroup>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col md={6} mdOffset={3} xs={10} xsOffset={2}>
                <FormGroup>
                    <Button bsStyle='info' type='submit'>Add Subject</Button>
                </FormGroup>
            </Col>
        </Row>
      </div>
    );
  }
}

export default GradeCal;