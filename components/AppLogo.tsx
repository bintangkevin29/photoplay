import React from 'react';
import {StyleSheet, View} from 'react-native';

import Logo from '../assets/images/logo.svg';

const AppLogo: React.FC = () => {
  return (
    <View style={style.logoContainer}>
      <Logo />
    </View>
  );
};

const style = StyleSheet.create({
  logoContainer: {
    paddingVertical: 37.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default AppLogo;
