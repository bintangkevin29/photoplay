import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface ProfilePictureProps {
  style?: StyleProp<ViewStyle>;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({children, style}) => {
  return <View style={[profilePictureStyle.container, style]}>{children}</View>;
};

const profilePictureStyle = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D1D',
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfilePicture;
