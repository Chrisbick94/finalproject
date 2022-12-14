import { useState } from 'react';
import Calendar from 'react-calendar';
import '../Calendar.css'


function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='pageapp'>
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
    </div>
  );
}

export default Calendar;