import React, { useLayoutEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { styles } from './styles';
import { indexStyles } from '../../../indexStyles';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any, 'Login'>;
};
export const LoginPage: React.FC<Props> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation]);
  
  return (
    <View style={[indexStyles.container, styles.loginContainer]}>
      <Image source={require('../../../assets/logo.png')} />
      
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          buttonStyle={{ backgroundColor: '#2d3548', borderRadius: 7 }}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};


