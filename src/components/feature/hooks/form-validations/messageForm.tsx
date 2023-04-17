
export const messageFormValidation = (event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>, name: string, value: any,setErrors: any, errors: any,omit:any) => {

    switch (name) {
        case 'suspectName':
            if(value.length <=3){
                // Set the error state
                setErrors({
                    ...errors,
                    suspectName:'Suspect Name needs to have atleast have 3 letters'
                })
            }else{
                // set the error state empty or remove the error for the input
                //omit function removes/omits the value from given object and returns a new object
                let newObj = omit(errors, "suspectName");
                setErrors(newObj);
                
            }
            break;
    
        case 'suspectAlias':
            if(value.length <= 1){
                // Set the error state
                setErrors({
                    ...errors,
                    suspectAlias:'Suspect Alias needs to have atleast have 1 letter'
                })
            }else{
                // set the error state empty or remove the error for the input
                //omit function removes/omits the value from given object and returns a new object
                let newObj = omit(errors, "suspectAlias");
                setErrors(newObj);
                
            }
            break;
    
            case 'message':
                if(value.length <= 4){
                    // Set the error state
                    setErrors({
                        ...errors,
                        message:'Suspect Alias needs to have atleast have 5 letter'
                    })
                }else{
                    // set the error state empty or remove the error for the input
                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "message");
                    setErrors(newObj);
                    
                }
                break;
        
        default:
            break;
    }
}
