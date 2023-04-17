import * as React from 'react'


export const AccordionItem =({name,question, children}: any)=> {
    const [isActive, setIsActive] = React.useState(false);
    const inputRef = React.useRef<null|any>(null);
   

    return(
        <div className="tab w-full overflow-hidden border-t text-blue-700">
        <input ref={inputRef} onClick={()=> setIsActive(!isActive)} className="absolute opacity-0" id={name} type="radio"/>
        <label className="flex p-5 leading-normal cursor-pointer w-full justify-between" htmlFor={name}>{question}  <span>{isActive ? "-" : "+"}</span></label>
        {isActive && <div className="text-black tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            {children}
        </div>}
    </div>
    )
}