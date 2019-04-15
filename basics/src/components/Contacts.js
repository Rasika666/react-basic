import React, { Component } from 'react'
import Contact from './Contact';

export default class Contacts extends Component {
    state = {
         contacts : [
             {
                 id : 1,
                 name : 'rasika weragoda',
                 email : 'rasika@gmail.com',
                 phone :'011-2242009'
             },
             {
                id : 2,
                name : 'Kasun',
                email : 'kasun@gmail.com',
                phone :'011-2242009'
            },
            {
                id : 3,
                name : 'weragoda',
                email : 'weragoda@gmail.com',
                phone :'011-2242009'
            },
            {
                id : 4,
                name : 'Supun',
                email : 'supun@gmail.com',
                phone :'011-2242009'
            }
         ]
      };


      deleteContact = (id,e) => {
        const {contacts} = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
          contacts : newContacts
        })
      }
    
    
  render() {

    const {contacts} = this.state;
    return (
      <>
        {
            contacts.map(contact => 
            <Contact 
            key={contact.id}
            contact ={contact}
            deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
            />
            )
        }
      </>
    )
  }
}
