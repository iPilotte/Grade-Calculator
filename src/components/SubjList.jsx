import React, { Component } from 'react';
import {Grid, Row, Col, Button , FormGroup, Table} from 'react-bootstrap';
import SubjectItem from './SubjectItem';

class SubjList extends Component {

    addSubject(){
        const count = this.state.subjCount+1;
        this.setState({subjCount:count});
        const newSubjdata = this.state.subjdata.slice();
        newSubjdata.push({index:count, subj:"", credit:1, grade:4});
        this.setState({subjdata:newSubjdata});
        // console.log(this.state.subjdata);
    }

    handleChangeSubjectName(e){
        let newSubjdata = this.state.subjdata.slice();
        newSubjdata[Number(e.target.id)].subj = e.target.value;
        this.setState({subjdata : newSubjdata});
        //console.log("Change Subject " + Number(e.target.id) + " : " + this.state.subjdata[Number(e.target.id)].subj);
    }

    handleChangeCredit(e){
        let newSubjdata = this.state.subjdata.slice();
        newSubjdata[Number(e.target.id)].credit = e.target.value;
        this.setState({subjdata : newSubjdata});
        // console.log("Change Credit " + Number(e.target.id) + " : " + this.state.subjdata[Number(e.target.id)].credit);
    }

    handleChangeGrade(e){
        let newSubjdata = this.state.subjdata.slice();
        newSubjdata[Number(e.target.id)].grade = e.target.value;
        this.setState({subjdata : newSubjdata});
        // console.log("Change Grade " + Number(e.target.id) + " : " + this.state.subjdata[Number(e.target.id)].grade);
    }

    handleRemoveSubject(e){
        const index = Number(e.target.value);
        let newSubjdata = this.state.subjdata;
        if(newSubjdata.length <= 1){
            return;
        }
        //var pointer = newSubjdata.indexOf(index);
        // console.log("Before Remove At " + index + " : " + this.state.subjdata[index].subj);
        newSubjdata.splice(index, 1);
        this.setState({subjdata: newSubjdata});
        // console.log("After Remove At " + index + " : " + this.state.subjdata[index].subj);
    }

    constructor(props){
        super(props);
        this.state = {
            subjdata : [
                {index:1, subj:"", credit:1, grade:4}
            ],
            subjCount:1
        };
        this.handleRemoveSubject = this.handleRemoveSubject.bind(this);
        this.handleChangeSubjectName = this.handleChangeSubjectName.bind(this);
        this.handleChangeCredit = this.handleChangeCredit.bind(this);
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
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
                    {/* <SubjectItem items={this.state.subjdata} removeSubject={this.handleRemoveSubject} changeSubjectName={this.handleChangeSubjectName} changeCredit={this.handleChangeCredit} changeGrade={this.handleChangeGrade}/> */}
                    {this.state.subjdata.map((subject,id) => <SubjectItem key={subject.index} index={id} subj={subject.subj} credit={subject.credit} grade={subject.grade} 
                                                            removeSubject={this.handleRemoveSubject} changeSubjectName={this.handleChangeSubjectName} changeCredit={this.handleChangeCredit} changeGrade={this.handleChangeGrade}/>) }
                </tbody>
            </Table>
            </Col>
        </Row>
        <Row>
            <Col md={6} mdOffset={3} xs={6} xsOffset={3}>
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