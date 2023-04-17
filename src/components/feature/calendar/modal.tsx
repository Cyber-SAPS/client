import styles from '../../../styles/modal.module.css'


const Modal = ({ setIsOpen,day }: {setIsOpen: boolean | any, day: number | any}) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Events</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
           x
          </button>
          <div className={styles.modalContent}>
       

      {day.event &&  day.event.map((e: any, index: any) => {
        return(
          <div key={index}>
            {/* <Link href={`/organization/events/${e.slug}`}>{e.title}</Link> */}
            {e.title}
            <br />
            {e.content}

          </div>
        )
      })} 
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              {/* <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Go Back
              </button> */}
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

