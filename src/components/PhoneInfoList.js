import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps ={ //디폴트프롭값을 넣을땐 static으로 선언함
        data : [] 
     }

    render() {
      
        const{data, onRemove} = this.props; //비구조화할당을 통해서 레퍼런스를 만들어줌
        const list = data.map(
            info =>(
            <PhoneInfo
                onRemove={onRemove}
                info={info}
                key={info.id}
             />
            ) //key값은 나중에 업뎃할때 편하려구 넣음
        );
        return (
            <div>
              {list}   
            </div>
        );
    }
}

export default PhoneInfoList;