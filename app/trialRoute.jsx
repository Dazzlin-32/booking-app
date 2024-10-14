import React, { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const TrialRoute = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const roundedDate = roundToNearest30Minutes(date);
    setSelectedDate(roundedDate);
    hideDatePicker();
    Alert.alert("Selected Date", roundedDate.toString());
  };

  // Rounds the time to the nearest 30-minute interval
  const roundToNearest30Minutes = (date) => {
    const minutes = 30 * Math.round(date.getMinutes() / 30);
    return new Date(date.setMinutes(minutes, 0, 0));  // Set seconds and milliseconds to 0
  };

  // Set the minimum date (today) and maximum date (2 weeks from today)
  const minDate = new Date(); // Today
  const maxDate = moment().add(14, 'days').toDate(); // 2 weeks from now

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show DateTime Picker" onPress={showDatePicker} />
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"  // Allows selecting both date and time
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={minDate}
        maximumDate={maxDate}
        minuteInterval={30}  // Set time intervals to 30 minutes
      />

      {selectedDate && (
        <Text style={{ marginTop: 20 }}>
          Selected Date and Time: {moment(selectedDate).format('MMMM Do YYYY, h:mm A')}
        </Text>
      )}
    </View>
  );
};

export default TrialRoute;
