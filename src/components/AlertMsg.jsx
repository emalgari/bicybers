import React from 'react';
import './AlertMsg.css';

const AlertMsg= (props) => {
    return (
      props.alert && <div className={`text-center alert alert-${props.alert.type}`} role="alert"> 
          {props.alert.msg}  
      </div>
    );
}
    

export default AlertMsg;