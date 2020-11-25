import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import BackBar from '../components/BackBar';

interface ContainerProps {
  withBack?: boolean;
  noPadding?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<ContainerProps> = ({
  withBack,
  children,
  noPadding,
  style,
}) => {
  return (
    <View
      style={[
        containerStyle.container,
        noPadding && containerStyle.containerNoPadding,
        style,
      ]}>
      {withBack && <BackBar />}
      {children}
    </View>
  );
};

const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
  },
  containerNoPadding: {
    paddingTop: 0,
  },
});

export default Container;
