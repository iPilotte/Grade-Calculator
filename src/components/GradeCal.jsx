import React, { Component } from 'react';
import {Grid, Row, Col, Button , FormControl , FormGroup, ControlLabel, Table} from 'react-bootstrap';
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

    addSubject(){
        const newSubjdata = this.state.subjdata.slice();
        newSubjdata.push({"subj":"", credit:3, grade:2});
        this.setState({subjdata:newSubjdata});
    }

    handleRemoveSubject(e){
        
    }

    constructor(props){
        super(props);
        this.state = {
            subjdata : [
                {"subj":"Subject Name", credit:1, grade:3.5}
            ]
        };
        this.handleRemoveSubject = this.handleRemoveSubject.bind(this);
    }
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
                    {this.state.subjdata.map((item,id) => <Subject removeSubject={this.handleRemoveSubject} key={id} index={id} subj={item.subj} credit={item.credit} grade={item.grade} />)}
                </tbody>
            </Table>
            </Col>
        </Row>
        <Row>
            <Col md={6} mdOffset={3} xs={10} xsOffset={2}>
                <FormGroup>
                    <Button bsStyle='info' type='submit' onClick={() => this.addSubject()}>Add Subject</Button>
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
                <option value='4'>A</option>
                <option value='3.5'>B+</option>
                <option value='3'>B</option>
                <option value='2.5'>C+</option>
                <option value='2'>C</option>
                <option value='1.5'>C+</option>
                <option value='1'>D</option>
            </FormControl>
          </td>
          <td>
              <Button bsStyle='danger' className='delete-button' type='submit' value={this.props.index} onClick={this.props.removeSubject}>{this.props.index}</Button>
          </td>
      </tr>
    );
  }
}


export default GradeCal;