import React, { useLayoutEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { indexStyles } from '../../../indexStyles';
import { styles } from './styles';

import { DefaultButton } from '../../Components/Button/DefaultButton';

type Props = {
  navigation: NativeStackNavigationProp<any, 'Home'>
}

export const UrqlPage: React.FC<Props> = ({ navigation }) => {
  const handleHomeButton = () => {
    navigation.navigate('Home');
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
    <View style={indexStyles.container}>
      <View style={styles.buttonContainer}>
        <DefaultButton
          color='#1a202c'
          title='Home'
          onButtonClick={handleHomeButton}
        />
      </View>
    </View>
  );
};
