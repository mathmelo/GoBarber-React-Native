import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      <View accessible accessibilityRole="button">
        {loading ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text>{children}</Text>
        )}
      </View>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
