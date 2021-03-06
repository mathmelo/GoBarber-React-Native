import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

const Input = forwardRef(({ style, icon, ...rest }, ref) => (
  <Container style={style}>
    {icon && <Icon name={icon} size={29} color="rgba(255, 255, 255, 0.6)" />}
    <TInput {...rest} ref={ref} />
  </Container>
));

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
};

// Input.displayName = 'Input';

export default Input;
