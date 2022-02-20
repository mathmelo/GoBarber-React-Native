import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Name, Info, Time } from './styles';

function Appointments({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    const checkTranslate = formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });

    if (
      checkTranslate.includes('na última domingo') ||
      checkTranslate.includes('na última sábado')
    ) {
      const rightTranslate = checkTranslate.replace('na última', 'no último');

      return rightTranslate;
    }

    return checkTranslate;
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : 'https://uploads.commoninja.com/searchengine/wordpress/adorable-avatars.png',
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity
          onPress={() => {
            onCancel(data.id);
          }}
        >
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

Appointments.propTypes = {
  data: PropTypes.shape({
    past: PropTypes.bool.isRequired,
    cancelable: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
    canceled_at: PropTypes.string,
    id: PropTypes.number.isRequired,
    provider: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Appointments;
