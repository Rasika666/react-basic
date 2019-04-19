import React, { Component } from 'react'

class Test extends Component {

  state = {
    title : '',
    body :''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
      title : data.title,
      body : data.body
    }))
  }

  // componentWillMount(){
  //   console.log('test component will mounted');
  // }

  // componentDidUpdate(){
  //   console.log('test component updated'); //like state update after
  // }

  // componentWillUpdate(){
  //   console.log('test component will updated'); //before state update 
  // }

  render() {
    const {title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}



export default Test;