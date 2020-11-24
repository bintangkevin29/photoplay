import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CONSTANTS} from '../constants';

import FacebookLogo from '../assets/images/facebook_logo.svg';
import GoogleLogo from '../assets/images/google_logo.svg';

import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import AppLogo from '../components/AppLogo';
import CustomText from '../components/CustomText';
import CustomTouchable from '../components/CustomTouchable';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={CONSTANTS.backgroundColor} />
      <Image
        resizeMode="cover"
        style={style.imageBg}
        source={require('../assets/images/loginbg.png')}
      />
      <View style={style.innerContainer}>
        <AppLogo />
        <View style={style.loginFormContainer}>
          <CustomTextInput
            containerStyle={style.textInput}
            title="Email"
            placeholder="email here"
            autocompleteType="email"
            keyboardType="email-address"
          />
          <CustomTextInput
            containerStyle={style.textInput}
            title="Password"
            password={true}
            placeholder="password here"
            autocompleteType="password"
          />
          <CustomButton
            title="Login"
            onPress={() => navigation.navigate('HOME')}
          />
        </View>
        <View style={style.socialLoginContainer}>
          <View style={style.socialLoginTitle}>
            <View style={style.socialLoginBreaker} />
            <View style={style.socialLoginBreakerTextContainer}>
              <CustomText weight="medium" style={style.socialLoginBreakerText}>
                Social Logins
              </CustomText>
            </View>
          </View>
          <View style={style.socialIconContainer}>
            <CustomTouchable>
              <FacebookLogo style={style.socialIcon} height={47} width={47} />
            </CustomTouchable>
            <CustomTouchable>
              <GoogleLogo style={style.socialIcon} height={47} width={47} />
            </CustomTouchable>
          </View>
        </View>
        <View style={style.registerPrompt}>
          <CustomText weight="light">Don't have an account?</CustomText>
          <CustomTouchable>
            <CustomText style={style.registerButton} weight="bold">
              REGISTER
            </CustomText>
          </CustomTouchable>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 45,
  },
  loginFormContainer: {
    width: '100%',
    marginBottom: 32,
  },
  textInput: {
    marginBottom: 27,
  },
  socialLoginContainer: {
    width: '100%',
    marginBottom: 46,
  },
  socialLoginTitle: {
    width: '100%',
    height: 22,
    justifyContent: 'center',
    marginBottom: 17,
  },
  socialLoginBreaker: {
    backgroundColor: '#5B5B5B',
    height: 1,
    width: '100%',
  },
  socialLoginBreakerTextContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLoginBreakerText: {
    fontSize: 15,
    backgroundColor: CONSTANTS.backgroundColor,
    paddingHorizontal: 30,
  },
  socialIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    marginHorizontal: 14,
  },
  registerPrompt: {
    width: '100%',
    alignItems: 'center',
  },
  registerButton: {
    marginTop: 3.5,
  },
});

export default LoginScreen;
