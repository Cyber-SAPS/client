import styles from '../../../styles/calendar.module.css'
export const CalendarHeader = ({ onNext, onBack, dateDisplay }: any) => {
  return(
    <div id={styles["header"]}>
      <div id={styles["monthDisplay"]}>{dateDisplay}</div>
      <div>
        <button className={styles["button"]} onClick={onBack} id={styles["backButton"]} >Back</button>
        <button className={styles["button"]}  onClick={onNext} id={styles["nextButton"]}>Next</button>
      </div>
    </div>
  );
};