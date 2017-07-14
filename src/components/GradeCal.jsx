import React, { Component } from 'react';
import {Grid, Row, Col, Button , Form, FormControl , FormGroup, ControlLabel, Table} from 'react-bootstrap';
import '../assets/css/GradeCal.css';

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

class SubjList extends Component {
  render(){
    return(
      <Grid>
          <Row>
            <Col xs={10} xsOffset={1}>
            <Table responsive>
                <thead>
                    <tr>
                        <th width='30%'>Subject</th>
                        <th width='15%'>Credit</th>
                        <th width='15%'>Grade</th>
                        <th width='10%'></th>
                    </tr>
                </thead>
                <tbody>
                    <Subject/>
                </tbody>
            </Table>
            </Col>
        </Row>
        <Row>
            <Col md={6} mdOffset={3} xs={10} xsOffset={2}>
                <FormGroup>
                    <Button bsStyle='info' type='submit'>Add Subject</Button>
                </FormGroup>
            </Col>
        </Row>
      </Grid>
    );
  }
}

class Subject extends Component {
  render(){
    return(
      <tr>
          <td><FormControl type='text' placeholder='Subject Name'/></td>
          <td>
            <FormControl componentClass='select' placeholder='Credit'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </FormControl>
          </td>
          <td>
              <FormControl componentClass='select' placeholder='Credit'>
                <option value='1'>1</option>
                <option value='1.5'>1.5</option>
                <option value='2'>2</option>
                <option value='2.5'>2.5</option>
                <option value='3'>3</option>
                <option value='3.5'>3.5</option>
                <option value='4'>4</option>
            </FormControl>
          </td>
          <td>
              <Button bsStyle='danger' className='delete-button'>X</Button>
          </td>
      </tr>
    );
  }
}


export default GradeCal;