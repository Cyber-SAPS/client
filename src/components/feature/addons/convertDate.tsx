// Date formate Dec 16, 2021
export const convertDateFunc = (value: any) => {
    let newDate = new Date(value)
    let dateFormatted = new Intl.DateTimeFormat('en', { day: '2-digit',month: 'short', year: 'numeric'}).format(newDate)
    return dateFormatted;
  }
  
  // date format 12/12/2021
  export const calendarDate = (value: any) => {
    const fullDate = new Date(value)
    const convertedDate = fullDate.toLocaleDateString("en-US")
    return convertedDate;
  }
  
  
  
  // new Date().toLocaleDateString()
  // "7/2/2021"
  // new Date().toLocaleDateString('en-US')
  // "7/2/2021"
  
  
  // const currentDate = new Date();
  
  // const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  
  // console.log(currentDate.toLocaleDateString('de-DE', options));
  //Freitag, 2. Juli 2021
  
  // console.log(currentDate.toLocaleDateString('ar-EG', options))
  // الجمعة، ٢ يوليو ٢٠٢١
  
  // console.log(currentDate.toLocaleDateString('en-us', options));
  //Friday, Jul 2, 2021
  
  
  
  // new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
  // "Friday, Jul 2, 2021"
  
  // new Date().toDateString();
  //"Fri Jul 02 2021"
  
  // getFullYear() – gets the year as a four digit number (yyyy)
  // getMonth() – gets the month as a number (0-11)
  // getDate() – gets the day as a number (1-31)
  // getHours() – gets the hour (0-23)
  
  
  // There are 4 basic options which are:
  //     weekday – This outputs the day of the week depending on how you want it to appear (short or long).
  //     year – This outputs the year as a number
  //     month – This outputs the month of the year depending on how you want it to appear (short or long).
  //     day – Finally, this outputs the day as a number
  
  // new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short"}) // "Jul 2021 Friday"
  // new Date().toLocaleDateString('en-us', { year:"numeric", month:"short"})
  // "Jul 2021"