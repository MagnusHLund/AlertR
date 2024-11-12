import React, {ReactNode} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import IStandardInput from '../IStandardInput';

interface ICustomButtonProps extends IStandardInput {
  transparent?: boolean;
  children: ReactNode;
  fitContent?: boolean;
}

const {height, width} = Dimensions.get('window');

const CustomButton: React.FC<ICustomButtonProps> = ({
  transparent = false,
  children = '',
  fitContent = true,
}) => {
  const backgroundStyle = {
    backgroundColor: transparent ? 'transparent' : 'white',
  };

  return (
    <TouchableOpacity style={[style.button, backgroundStyle]}>
      {fitContent && <View />}
      {children}
      {fitContent && <View />}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    color: 'white',
    width: width * 0.1,
    padding: 5,
    flex: 1,
  },
});

export default CustomButton;
