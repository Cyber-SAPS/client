import * as React from 'react'
import { AccordionItem } from './item';

export const AccordionComponent =()=> {

    return(
        <div className="w-full md:w-4/5 mx-auto p-8">
            <div className="shadow-md">
                <AccordionItem name="tab1" question="How do I obtain a loud music permit?">
                    <p className="p-5">Fill the loud music permit form and submit to the Headquarters for review and approval</p>
                </AccordionItem>
                <AccordionItem name="tab2" question="How do I renew my National Passport">
                    <p className="p-5">Fill the application form and follow the instructions on page one of the form. Then submit apllication form with expired password for renewal</p>
                </AccordionItem>
                <AccordionItem name="tab3" question="What is the process to apply for a firearm license?">
                    <p className="p-5">Fill the application form. Then a background check will be conducted, along with an interview. Once you have 
                    passes the interview and background check, a provisional license will be provided to facilitate training. Once training assessment is successful.
                    The license will be approved and you have t pay for the license processing.</p>
                </AccordionItem>
                <AccordionItem name="tab4" question="How can I obtain a vehicle insurance report?">
                    <p className="p-5">Request from the investigator, for an insurance report. he will submit the Police report which will facilitate the 
                    insurance report process. Once complete, you will be provided with a collection date.</p>
                </AccordionItem>
            </div>
        </div>
    )
}