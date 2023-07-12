import React, { useLayoutEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { indexStyles } from '../../../indexStyles';
import { styles } from './styles';

import { DefaultButton } from '../../Components/Button/DefaultButton';

type Props = {
  navigation: NativeStackNavigationProp<any, 'Login'>;
};
export const LoginPage: React.FC<Props> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
    StatusBar.setBarStyle('light-content');
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
    
    StatusBar.setBarStyle('dark-content');
  }, [navigation]);
  
  return (
    <View style={[indexStyles.container, styles.loginContainer]}>
      <Image source={require('../../../assets/logo.png')} />
      
      <View style={styles.buttonContainer}>
        <DefaultButton
          color='#2d3548'
          title='Login'
          onButtonClick={handleLogin}
        />
      </View>
    </View>
  );
};


