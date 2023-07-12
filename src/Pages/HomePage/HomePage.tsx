import React from 'react';
import { View, Image, Text } from "react-native";
import { indexStyles } from '../../../indexStyles';
import { styles } from './styles';

import { Button } from 'react-native-elements';

export const HomePage = () => {
  return (
    <View style={[indexStyles.container ,styles.homeContainer]}>
      <Image source={require('../../../assets/logo.png')} />
      
      <Text>Auth0 User Status: Logged In</Text>
      
      <View style={styles.buttonGroup}>
        <Button
          title='Map'
          buttonStyle={{ backgroundColor: '#2d3548', borderRadius: 7 }}
        />
        
        <Button
          title='Urql'
          buttonStyle={{ backgroundColor: '#2d3548', borderRadius: 7 }}
        />
      </View>
      
      <View style={styles.buttonGroup}>
        <Button
          title='Logout'
          buttonStyle={{ backgroundColor: '#ff5353', borderRadius: 7 }}
        />
      </View>
    </View>
  );
};
