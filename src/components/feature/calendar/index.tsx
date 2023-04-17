import * as React from 'react';
import { useDate } from '../hooks';
import styles from '../../../styles/calendar.module.css'
import { CalendarHeader } from './header';
import { Day } from './day';

export default function Calendar({events}: {events: any}){
  const [nav, setNav] = React.useState(0);
  const [clicked, setClicked] = React.useState();
  const eventData = useDate(events, nav);
  console.log("CLicked",clicked)
  
  return(
    <div id={styles.container}>
      <CalendarHeader 
        dateDisplay={eventData.dateDisplay}
        onNext={() => setNav(nav + 1)}
        onBack={() => setNav(nav - 1)}
      />
      <div id={styles["weekdays"]}>
        <div className={styles.headerDiv}>Sunday</div>
        <div className={styles.headerDiv}>Monday</div>
        <div className={styles.headerDiv}>Tuesday</div>
        <div className={styles.headerDiv}>Wednesday</div>
        <div className={styles.headerDiv}>Thursday</div>
        <div className={styles.headerDiv}>Friday</div>
        <div className={styles.headerDiv}>Saturday</div>
      </div>
      <div id={styles["calendar"]}>
        {eventData && eventData.days?.map((d: any, index: any) => (
          <Day
            key={index}
            day={d}
            onClick={() => {
              if (d.value !== `${styles.padding}`) {
                setClicked(d.date);
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}