import React, { Component } from 'react';
import {Grid, Row, Col, Button , FormControl , FormGroup, ControlLabel, Table} from 'react-bootstrap';
import SubjectItem from './SubjectItem';

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
                    {this.state.subjdata.map((item,id) => <SubjectItem removeSubject={this.handleRemoveSubject} key={id} index={id} subj={item.subj} credit={item.credit} grade={item.grade} />)}
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


export default SubjList;