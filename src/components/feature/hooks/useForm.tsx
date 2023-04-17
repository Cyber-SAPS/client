import * as React from 'react'
import {omit} from 'lodash'

export const useForm =(callback: any,initialState: any, errorState: any,validation: any)=> {
    // Form values in state
    const [values, setValues] = React.useState(initialState||{});
    // Form Errors in state
    const [errors, setErrors] = React.useState(errorState||{});


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        //To stop default events    
        event.persist();
        // Deconstruct retrieved data
        let name = event.target.name;
        let val = event.target.value;

        // Validate data
        validation(event,name,val,setErrors, errors,omit)

        // Set the data values in state
        setValues({
            ...values,
            [name]:val,
        })

    }
    // handle submitted data
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {     
        if(event) event.preventDefault();
    
        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();
    
        }else{
            // console.log("Cll","There is an Error! This form is an empty / blank form")
            alert("There is an Error! please review form for errors");
        }
      };


    

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

