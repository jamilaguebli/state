import img from './img.jpg';
import './App.css';
import React, { Component} from 'react';

class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      
      FullName:"jamila guebli",
      bio:"reactjs student",
    profession:"front end developer",
  

    }
  } 

 toggleShow =( ) => {
    setShow(!show);
  }
  render() {
    return (
    <div>
      <img src={img} style={{widh:"300px", height:"200px"}} />
    <h1> FullName:{this.state.FullName}</h1>
    <h1>bio: {this.state.bio}</h1>
    <h1> profession:{this.state.profession}</h1>
    <button  onClick={this.toggleShow}>show  </button>
    </div>
    )
  }
}
  

export default App;
