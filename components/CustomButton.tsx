import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CONSTANTS} from '../constants';
import CustomText from './CustomText';
import CustomTouchable from './CustomTouchable';

interface CustomButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  containerStyle,
}) => {
  return (
    <CustomTouchable onPress={onPress}>
      <LinearGradient
        colors={[CONSTANTS.primaryColor, CONSTANTS.primaryGradientColor]}
        style={[style.container, containerStyle]}>
        <CustomText weight="bold" style={style.title}>
          {title.toUpperCase()}
        </CustomText>
      </LinearGradient>
    </CustomTouchable>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: CONSTANTS.borderRadius,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: CONSTANTS.backgroundColor,
    fontSize: 15,
  },
});

export default CustomButton;
