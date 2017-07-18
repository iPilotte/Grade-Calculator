import React, { Component } from 'react';
import {Grid, Row, Col , FormControl , FormGroup, ControlLabel} from 'react-bootstrap';
import '../assets/css/GradeCal.css';
import SubjList from './SubjList';

class GradeCal extends Component {
    
    handleChangeCA(e){
        const ca = this.inputCA;
        let new_ca = parseFloat(ca.value);
        if(isNaN(new_ca)){
            return;
        }
        if(new_ca < 0){
            new_ca = 0;
        }
    }

    handleChangeGPA(e){
        const gpa = this.inputGPA;
        let new_gpa = parseFloat(gpa.value);
        if(isNaN(new_gpa)){
            return;
        }
        if(new_gpa < 0){
            new_gpa = 0;
        }
        this.setState({gpa:new_gpa});
    }

    CalculateGPA(){

    }

    constructor(props){
        super(props);
        this.state ={
            ca:0,
            gpa:0,
        };
    }
  render() {
    return (
      <Grid>
        <Row>
            <Col md={3} mdOffset={3} xs={4} xsOffset={2}>
                <FormGroup>
                    <ControlLabel>CA</ControlLabel>
                     <FormControl type='number' placeholder='CA' inputRef={(input) => this.inputCA = input} defaultValue={this.state.ca} onChange={this.handleChangeCA.bind(this)} autoFocus/> 
                </FormGroup>
            </Col>
            <Col md={3} xs={4}>
                <FormGroup>
                    <ControlLabel>GPA</ControlLabel>
                    <FormControl type='number' placeholder='GPA' inputRef={(input) => this.inputGPA = input} defaultValue={this.state.gpa} onChange={this.handleChangeGPA.bind(this)}/>
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