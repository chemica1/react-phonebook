import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
          name: '이름',
          phone: '010-0000-0000',
          id: 0
        },
    }

    handleRemove = ()=>{
        const{ info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        const {
           name, phone
        } = this.props.info; //프롶을 비구조할당을 통해 받아옴
        
        const style = {
            border: "1px solid black",
            padding: '8px',
            margin: '8px'
        };
        
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <botton onClick = {this.handleRemove}>삭제</botton>
            </div>
        );
    }
}

export default PhoneInfo;