import React, { Component } from 'react';
import {Grid, Row, Col , FormControl , FormGroup, ControlLabel} from 'react-bootstrap';
import '../assets/css/GradeCal.css';
import SubjList from './SubjList';

class GradeCal extends Component {
    
    handleChangeCA(e){
        const ca = this.inputCA;
        let new_ca = parseFloat(ca.value);
        if(isNaN(new_ca)){
            this.setState({ca:0})
            return;
        }
        if(new_ca < 0){
            new_ca = 0;
        }
        this.setState({ca:new_ca})
    }

    handleChangeGP(e){
        const gp = this.inputGP;
        let new_gp = parseFloat(gp.value);
        if(isNaN(new_gp)){
            this.setState({gp:0})
            return;
        }
        if(new_gp < 0){
            new_gp = 0;
        }
        this.setState({gp:new_gp});
    }

    constructor(props){
        super(props);
        this.state ={
            ca:0,
            gp:0,
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
                    <ControlLabel>GP</ControlLabel>
                    <FormControl type='number' placeholder='GP' inputRef={(input) => this.inputGP = input} defaultValue={this.state.gp} onChange={this.handleChangeGP.bind(this)}/>
                </FormGroup>
            </Col>
        </Row>
        <hr/>
        <SubjList caValue={this.state.ca} gpValue={this.state.gp}/>
      </Grid>
    );
  }
}

export default GradeCal;