import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts : state.contacts.filter(contact => contact.id !== action.payload)
            };

        case 'ADD_CONTACT':
        return{
            ...state,
            contacts : [action.payload, ...state.contacts]
        };

        default :
            return state;
    }
}

export class Provider extends Component {

    //this is our globel state
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
        ],

        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
    }
  render() {
    return (
      <Context.Provider value = {this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
