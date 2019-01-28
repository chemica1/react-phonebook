import React, { Component } from 'react';

class PhoneInfo extends Component {
    render() {
        const { name, phone, id} = this.props.info; //프롶을 비구조할당을 통해 받아옴
        
        const style = {
            border: "1px solid black",
            padding: '8px',
            margin: '8px'
        };
        
        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;