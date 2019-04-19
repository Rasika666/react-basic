import React, { Component } from 'react';
import {Consumer} from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {

  state = {
    name :'',
    email : '',
    phone : '',
    error : {}
  }

  async componentDidMount(){
    const {id} = this.props.match.params;

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;
    this.setState({
      name:contact.name,
      email:contact.email,
      phone:contact.phone
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onSubmit = async (dispatch, e) => {
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

    const updContact = {
      // name : name,
      // email :email,
      // phone : phone
      name,
      email,
      phone
    }

   //send request
   const {id} = this.props.match.params;

   const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

   dispatch({type:'UPDATE_CONTACT', payload:res.data});

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
              <div className="card-header">Edit Contact</div>
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
      
                  
      
                  
                  <input type="submit" value="Update Contact" className="btn btn-block btn-primary"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )

    
  }
}

export default EditContact;
