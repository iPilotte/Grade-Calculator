import React, { Component } from 'react';
import {Button , FormControl} from 'react-bootstrap';

class SubjectItem extends Component {

  render(){
    return(
      <tr>
          <td><FormControl type='text' placeholder='Subject Name' id={this.props.index.toString()} onKeyUp={this.props.changeSubjectName}/></td>
          <td>
            <FormControl componentClass='select' placeholder='Credit' id={this.props.index.toString()} defaultValue={this.props.credit} onChange={this.props.changeCredit}>
                <option value='0'>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
            </FormControl>
          </td>
          <td>
              <FormControl componentClass='select' placeholder='Credit' id={this.props.index.toString()} defaultValue={this.props.grade} onChange={this.props.changeGrade}>
                <option value='4'>A</option>
                <option value='3.5'>B+</option>
                <option value='3'>B</option>
                <option value='2.5'>C+</option>
                <option value='2'>C</option>
                <option value='1.5'>C+</option>
                <option value='1'>D</option>
                <option value='0'>-</option>
            </FormControl>
          </td>
          <td>
              <Button bsStyle='danger' className='delete-button' type='submit' value={this.props.index} onClick={this.props.removeSubject}>X</Button>
          </td>
      </tr>
    );
  }
}


export default SubjectItem;