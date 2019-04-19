import React, { Component } from 'react';
import {Consumer} from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

  state = {
    name :'',
    email : '',
    phone : '',
    error : {}
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const {name, email, phone} = this.state;

    //check for error
    if(name === ''){
      this.setState({
        error : {name : 'Name is reqiured'}
      });
      return;
    }
    if(email === ''){
      this.setState({
        error : {email : 'Email is reqiured'}
      });
      return;
    }
    if(phone === ''){
      this.setState({
        error : {phone : 'phone is reqiured'}
      });
      return;
    }

    const newContact = {
      id : uuid(),
      name, //name : name
      email,
      phone
    }

    dispatch({ type : 'ADD_CONTACT', payload : newContact});

    //clear state
    this.setState({
      name : '',
      email : '',
      phone : '',
      error :{}
    });

    //redirect to home page
    this.props.history.push('/');
  }

  render() {
    const {name, email,phone, error} = this.state;

    return(
      <Consumer>
        {value => {
          const {dispatch} = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form action="" onSubmit = {this.onSubmit.bind(this, dispatch)}>
                  
                  <TextInputGroup 
                  label="Name" 
                  name="name" 
                  placeholder="Enter Name..."
                  value = {name}
                  onChange = {this.onChange}
                  error = {error.name}
                  />

                  <TextInputGroup 
                  label="Email" 
                  name="email" 
                  type = "email"
                  placeholder="Enter Email..."
                  value = {email}
                  onChange = {this.onChange}
                  error = {error.email}
                  />

                  <TextInputGroup 
                  label="Phone" 
                  name="phone" 
                  placeholder="Enter Phone..."
                  value = {phone}
                  onChange = {this.onChange}
                  error = {error.phone}
                  />
      
                  
      
                  
                  <input type="submit" value="Add Contact" className="btn btn-block btn-primary"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )

    
  }
}

export default AddContact;
