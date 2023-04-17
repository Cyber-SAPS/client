import Calendar from '../../components/feature/calendar';
import * as React from 'react';
import eventsData from "../../components/feature/addons/events.json"
import { PageHeader } from '../../components/ui/header';



export default function EventCalendar(){
    const [events] = React.useState(eventsData)

    if(typeof events[0] === "undefined") return <>Coming Soon</>;
    if(events.length <= 0) return <>Coming Soon</>;

    return(
        <div className='border'>
            <PageHeader title="Calendar of Events" />
            <div className="grid grid-cols-8 gap-4">
                <div className="col-span-2 p-10 flex flex-col">   
                {/* Left Side Content          */}
                </div>
                <div className="col-span-6 p-5">
                <Calendar events={events} />
                </div>
            </div>
        </div>
    )
}