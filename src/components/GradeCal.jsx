import React, { Component } from 'react';
import {Grid, Row, Col, Button , FormControl , FormGroup, ControlLabel, Table} from 'react-bootstrap';
import '../assets/css/GradeCal.css';
import SubjList from './SubjList';

class GradeCal extends Component {

  render() {
    return (
      <Grid>
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
        <SubjList/>
      </Grid>
    );
  }
}

export default GradeCal;