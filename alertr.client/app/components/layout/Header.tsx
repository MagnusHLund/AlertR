import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from 'react-native'
import CustomButton from '../input/Buttons/CustomButton'
import CustomImage from '../content/CustomImage'

const { height, width } = Dimensions.get('window')

const Header = () => {
  return (
    <ImageBackground
      style={[style.background, { height: height * 0.1 }]}
      source={require('./../../assets/icons/placeholder.png')}
    >
      <CustomButton style={style.button} transparent={true}>
        <CustomImage
          src={require('./../../assets/icons/add.png')}
          alt="Add new alert"
        />
      </CustomButton>
      <Text style={style.title}>Welcome to AlertR</Text>;
      <CustomButton style={style.button} transparent={true}>
        <CustomImage
          src={require('./../../assets/icons/settings.png')}
          alt="Go to settings"
        />
      </CustomButton>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  background: {
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 25,
  },
  button: {
    maxWidth: width * 0.1,
    maxHeight: width * 0.1,
  },
})

export default Header
