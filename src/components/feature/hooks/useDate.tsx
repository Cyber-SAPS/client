import * as React from 'react';
import { calendarDate } from '../addons/convertDate';

interface EventI {
  title: string;
  date: string;
}

interface DaysArr1 {
    value: string | number;
    event: EventI[];
    isCurrentDay: boolean;
    date: string;
}
interface DaysArr2 {
    value: string | number;
    event: null | undefined;
    isCurrentDay: boolean;
    date: string;
}
type DaysArrI = DaysArr1 | DaysArr2;


export const useDate = (events: any, nav: any) => {
  const [dateDisplay, setDateDisplay] = React.useState<any>('');
  const [days, setDays] = React.useState<DaysArrI[] | null | undefined>([]);
  const eventForDate3 = React.useCallback(
    (date: any) => {
      const dateEvent: any[] = [];
      events.forEach(function(event: any){
        if(calendarDate(event.date) === date){
          dateEvent.push(event)
        } else {
          return dateEvent;
        };
      })
      return dateEvent;
    },
    [events],
  )

  // const eventForDate3 = (date: any) => {
  //   const dateEvent: any[] = [];
  //   events.forEach(function(event: any){
  //     if(calendarDate(event.date) === date){
  //       dateEvent.push(event)
  //     } else {
  //       return dateEvent;
  //     };
  //   })
  //   return dateEvent;
  // }
  


  React.useEffect(() => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    },);

    setDateDisplay(`${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`);
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    const daysArr = [];

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          event: eventForDate3(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: 'padding',
          event: null,
          isCurrentDay: false,
          date: '',
        });
      }
    }


    setDays(daysArr);
  }, [eventForDate3, events, nav]);

  return {
    days,
    dateDisplay,
  };
};