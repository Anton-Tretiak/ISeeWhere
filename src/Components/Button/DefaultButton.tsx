import React from 'react';
import { Button } from 'react-native-elements';

type Props = {
  color: string,
  title: string,
  onButtonClick: () => void;
}
export const DefaultButton: React.FC<Props> = ({ color, title, onButtonClick }) => (
  <Button
    title={title}
    buttonStyle={{ backgroundColor: color, borderRadius: 7 }}
    onPress={onButtonClick}
  />
);
