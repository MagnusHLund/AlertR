import React from 'react';
import {ImageBackground, StyleSheet, Text, Dimensions} from 'react-native';
import CustomButton from '../input/Buttons/CustomButton';

const {height} = Dimensions.get('window');

function Header(): React.JSX.Element {
  return (
    <ImageBackground style={[style.background, {height: height * 0.1}]}>
      <CustomButton>
        <Text>test</Text>
      </CustomButton>
      <Text style={style.title}>Welcome to AlertR</Text>;
      <CustomButton>settings</CustomButton>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  background: {
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 25,
  },
});

export default Header;
