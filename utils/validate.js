import React, { useState } from 'react'

const validate = (input) => {    
    let error=null;
    if(input.username === ''){
        error = {
            ...error,
            username: 'Username is Required..!'
        }
    }
    else if( input.password === ''){
        error = {
            ...error,
            password: 'Password is Required..!'
        }            
    }
    else if(input.password.length < 6){
        error = {
            ...error,
            password: 'Should Contains 6 charcter ..!'
        }
    }

        return error;
}
export default validate;