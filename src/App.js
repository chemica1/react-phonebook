import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {
  
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate=(data)=>{
    this.setState({  //배열의 직접적인 값변환은 react에서 금기됨. concat이라는 함수를 이용해라
      information:this.state.information.concat({//기존의 배열을 수정하거나 건드리지않고 새로운 배열을 만들어서 기존의 배열자리에 넣어주는 작업이다.
       name : data.name,
       phone: data.phone,
       id : this.id++ //배열을 랜더링해줄때 고유값인 key값을 만드는것임. 그리고 id는 랜더링을 안하니까 state객체에 안넣은거임
      })    
    });
  }

  handleRemove =(id)=>{
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  }


  render() {
    return (
     <div>
       <PhoneForm
        onCreate = {this.handleCreate}
       />
       <PhoneInfoList
        data={this.state.information}
        onRemove={this.handleRemove}
        />
        {/* {JSON.stringify(this.state.information)*/}
     </div>
    );
  }
}

export default App;
