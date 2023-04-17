
export const registrationFormValidation = (event: React.ChangeEvent<HTMLInputElement>, name: string, value: any,setErrors: any, errors: any,omit:any) => {

    switch (name) {
        case 'username':
            if(value.length <= 0){
                // Set the error state
                setErrors({
                    ...errors,
                    username:'Username needs to have atleast have 5 letter'
                })
            }else{
                // set the error state empty or remove the error for username input
                //omit function removes/omits the value from given object and returns a new object
                let newObj = omit(errors, "username");
                setErrors(newObj);
                
            }
            break;
    
    
        case 'email':
            if(
                !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
            ){
                setErrors({
                    ...errors,
                    email:'Please insert a valid email address'
                })
            }else{

                let newObj = omit(errors, "email");
                setErrors(newObj);
                
            }
        break;
        
        case 'password':
            if(
                !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
            ){
                setErrors({
                    ...errors,
                    password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                })
            }else{

                let newObj = omit(errors, "password");
                setErrors(newObj);
                
            }
        break;
        
        default:
            break;
    }
}
