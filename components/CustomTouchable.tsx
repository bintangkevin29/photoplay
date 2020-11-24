import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomTouchable: React.FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchable;
