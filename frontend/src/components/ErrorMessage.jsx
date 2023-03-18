import React from 'react';

const ErrorMessage = (props) => {
    let error_obj =  props.errors.find(err => err.param === props.name)
    console.log(props.errors);
    console.log(props.name);
    console.log(props.error_obj);
    if(error_obj){
        return(
            <small className = "error-msg">
                {error_obj.msg}
            </small>
        )
    }
    return null;
    
}

export default ErrorMessage;