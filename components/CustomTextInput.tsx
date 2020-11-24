import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  KeyboardType,
} from 'react-native';
import {CONSTANTS} from '../constants';
import {AutoCompleteType} from '../definition';
import CustomText from './CustomText';
import CustomTouchable from './CustomTouchable';

interface CustomTextInputProps {
  title: string;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardType;
  password?: boolean;
  autocompleteType?: AutoCompleteType;
  onChangeText?: (e: string) => void;
  value?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  title,
  titleStyle,
  containerStyle,
  inputStyle,
  placeholder,
  keyboardType = 'default',
  password,
  autocompleteType,
  onChangeText,
  value,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[style.container, containerStyle]}>
      <CustomText style={[style.title, titleStyle]}>
        {title.toUpperCase()}
      </CustomText>
      <View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[style.textInput, inputStyle]}
          placeholderTextColor={CONSTANTS.lighterGreyColor}
          secureTextEntry={password}
          keyboardType={keyboardType}
          autoCompleteType={autocompleteType}
        />
        {password && (
          <View style={style.forgotButtonContainer}>
            <CustomTouchable
              onPress={() => navigation.navigate('ForgotPassword')}>
              <CustomText style={style.forgotButton} weight="bold">
                FORGOT?
              </CustomText>
            </CustomTouchable>
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontFamily: CONSTANTS.fontBold,
    fontSize: 12,
    marginBottom: 8,
  },
  textInput: {
    width: '100%',
    borderRadius: CONSTANTS.borderRadius,
    backgroundColor: CONSTANTS.darkerGreyColor,
    height: 42,
    paddingHorizontal: 20,
    color: CONSTANTS.greyColor,
    fontFamily: CONSTANTS.fontRegular,
    fontSize: 17,
  },
  forgotButtonContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotButton: {
    fontSize: 11,
  },
});

export default CustomTextInput;
