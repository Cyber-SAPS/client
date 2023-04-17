import * as React from 'react';
import styles from '../../../styles/calendar.module.css'
import Modal from './modal'

export const Day = ({ day, onClick }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const className = `${styles.day} ${day.value === 'padding' ? `${styles.padding}` : ''} ${day.isCurrentDay ? `${styles.currentDay}` : ''}`;
  return (
    <div onClick={onClick} className={className}>
      {day.value === 'padding' ? '' : day.value}
      {day.event && day.event.length > 0 ? (
        <>
        <div className={styles["event"]} onClick={() => setIsOpen(true)}>{day.event.length} {day.event.length > 1 ? "Events" : "Event"}</div> 
        {isOpen && <Modal setIsOpen={setIsOpen} day={day}/>} 
        </>
      )
      : ""}

    </div>
  );
};
