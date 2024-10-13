import { useState } from 'react';
import { Text, Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function TrialRoute() {
    
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
     
      firstDay= {1}
      // hideExtraDays={true}
      hideArrows={true}
    />
  );
};
       
      