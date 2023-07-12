import React, { useLayoutEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { indexStyles } from '../../../indexStyles';
import { styles } from './styles';

import { DefaultButton } from '../../Components/Button/DefaultButton';

type Props = {
  navigation: NativeStackNavigationProp<any, 'Map'>
}

export const HomePage: React.FC<Props> = ({ navigation }) => {
  const handleMapButton = () => {
    navigation.navigate('Map')
  };
  
  const handleUrqlButton = () => {
    navigation.navigate('Urql');
  };
  
  const handleLogoutButton = () => {
    navigation.navigate('Login');
    StatusBar.setBarStyle('dark-content');
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#1a202c'
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerBackVisible: false
    });
    
    StatusBar.setBarStyle('light-content');
  }, [navigation]);
  
  return (
    <View style={[indexStyles.container ,styles.homeContainer]}>
      <Image source={require('../../../assets/logo.png')} />
      
      <Text style={{ fontWeight: 'bold' }}>
        Auth0 User Status: Logged In
      </Text>
      
      <View style={styles.buttonGroup}>
        <DefaultButton
          color='#2d3548'
          title='Map'
          onButtonClick={handleMapButton}
        />
        
        <DefaultButton
          color='#2d3548'
          title='Urql'
          onButtonClick={handleUrqlButton}
        />
      </View>
      
      <View style={styles.buttonGroup}>
        <DefaultButton
          color='#ff5353'
          title='Logout'
          onButtonClick={handleLogoutButton}
        />
      </View>
    </View>
  );
};
