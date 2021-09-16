import React from 'react';
class Appc extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:''
        }
    }  
    componentDidMount(){
        this.setState(() => {name:this.props.name})
        
    }  
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

export default Appc