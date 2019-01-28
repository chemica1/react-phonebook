import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App extends Component {

  handleCreate = (data) =>{
    console.log(data);  //이부분에 디버깅 오래걸림 잘 봐두자
  }

  render() {
    return (
      
     <div>
       <PhoneForm onCreate = {this.handleCreate} />
     </div>
    );
  }
}

export default App;
