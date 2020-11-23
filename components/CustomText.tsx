import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {CONSTANTS} from '../constants';

interface CustomTextProps extends TextProps {
  weight?: 'light' | 'medium' | 'bold';
  style?: StyleProp<TextStyle>;
}

const CustomText: React.FC<CustomTextProps> = ({children, weight, style}) => {
  return (
    <Text
      style={[
        customTextStyle.text,
        //@ts-ignore
        weight && customTextStyle[`text${weight}`],
        style,
      ]}>
      {children}
    </Text>
  );
};

const customTextStyle = StyleSheet.create({
  text: {
    color: CONSTANTS.whiteColor,
    fontFamily: CONSTANTS.fontRegular,
  },
  textmedium: {
    fontFamily: CONSTANTS.fontMedium,
  },
  textbold: {
    fontFamily: CONSTANTS.fontBold,
  },
  textlight: {
    fontFamily: CONSTANTS.fontLight,
  },
});

export default CustomText;
