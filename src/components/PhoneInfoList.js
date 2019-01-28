import React, { Component } from 'react';

class PhoneInfoList extends Component {
    static defaultProps ={ //디폴트프롭값을 넣을땐 static으로 선언함
        data : [] 
     }

    render() {
      
        const{data} = this.props;
        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id} />) //key값은 나중에 업뎃할때 편하려구 넣음
        );
        return (
            <div>
              {list}   
            </div>
        );
    }
}

export default PhoneInfoList;