import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo : false
  }

  onShowClick = (e) => {
    this.setState({
      showContactInfo : !this.state.showContactInfo
    });
  }

  onDeleteClick = () =>{
    this.props.deleteClickHandler();
  }
    
  render() {
    const {name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;
    return (
      <div className="card card-body mb-3">
         <h4>{name} <i className="fas fa-sort-down" style={{cursor:'pointer'}} onClick={this.onShowClick}></i>
         <i className="fas fa-times" style={{cursor:'pointer', color:'red', float:'right'}} onClick={this.onDeleteClick}></i>
         </h4>
         {showContactInfo ? (<ul className ="list-group">
             <li className="list-group-item">Email : {email}</li>
             <li className="list-group-item">Phone : {phone}</li>
         </ul>) : null} 
         
      </div>
    )
  }
}

Contact.propTypes = {
    contact : PropTypes.object.isRequired,
    deleteClickHandler :PropTypes.func.isRequired,
   

}

export default Contact;
