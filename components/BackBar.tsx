import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BackIcon from '../assets/images/back.svg';
import {CONSTANTS} from '../constants';
import CustomText from './CustomText';
import CustomTouchable from './CustomTouchable';

const BackBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[CONSTANTS.backgroundColor, 'rgba(0,0,0,0)']}
      style={style.container}>
      <CustomTouchable onPress={() => navigation.pop()} style={style.inner}>
        <BackIcon style={style.backIcon} />
        <CustomText style={style.backText} weight="bold">
          BACK
        </CustomText>
      </CustomTouchable>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 90,
    width: '100%',
    paddingHorizontal: 21,
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 8.3,
  },
  backText: {
    fontSize: 14,
  },
});

export default BackBar;
