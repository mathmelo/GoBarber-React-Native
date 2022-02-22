import React, { useState, useMemo } from 'react';
import DateTimerPicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, DateButton, DataText } from './styles';

function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormated = useMemo(
    () =>
      format(date, "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    [date],
  );

  const handleOpenPicker = (_, newDate) => {
    onChange(_, newDate);
    setOpened(false);
  };

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DataText>{dateFormated}</DataText>
      </DateButton>

      {opened && (
        <DateTimerPicker
          value={new Date()}
          onChange={handleOpenPicker}
          minimumDate={new Date()}
          locale="pt"
          mode="date"
          display="spinner"
        />
      )}
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
