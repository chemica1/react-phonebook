import React, { Component } from 'react';

class PhoneForm extends Component {
   state = {
       name:'',
       phone:'',
   }

   handleChange=(e)=>{
       this.setState({ //setState 함수 어케 동작하는지
           [e.target.name]:e.target.value //인풋에 달린 식별자 네임값 [e.target.name]에 들어감
       }); //이 문법은 object initializer
   }
   
   handelCreate =(data)=>{
       console.log(data);
   }

   handleSubmit=(e)=>{
    e.preventDefault();   
    this.props.onCreate(this.state);
   }
   
    render() {
        return ( //눌러도 새로고침 안되게 하려고 넣음
            <form onSubmit={this.handleSubmit}> 
               <input
                 name="name" //인풋을 관리하기 위한 식별자
                 placeholder="이름"
                 onChange = {this.handleChange} //자바처럼 대문자 주의
                 value ={this.state.name}
                />
                <input
                 name="phone"
                 placeholder="전화번호"
                 onChange={this.handleChange} //change가 발생했을때..
                 value={this.state.phone} //state객체의 프로퍼티값(공백들)
                />

                <button type="submit">등록</button>

                <div>
                    {this.state.name} {this.state.phone}
                </div>

            </form>
        );
    }
}

export default PhoneForm;