import React from 'react';
import {StyleSheet, View} from 'react-native';

import Logo from '../assets/images/logo.svg';

const AppLogo: React.FC = () => {
  return (
    <View style={style.logoContainer}>
      <Logo width={112} height={136.23} />
    </View>
  );
};

const style = StyleSheet.create({
  logoContainer: {
    paddingVertical: 52,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default AppLogo;
