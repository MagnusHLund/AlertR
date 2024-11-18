import React, { useEffect } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
} from 'react-native'
import CustomButton from '../input/Buttons/CustomButton'
import CustomImage from '../content/CustomImage'

const { height, width } = Dimensions.get('window')

const Header = () => {
  useEffect(() => {}, [])

  return (
    <View>
      <ImageBackground
        style={[style.headerTop, style.bottomBorder]}
        source={require('./../../assets/icons/AlertR-transparent.png')}
        resizeMode="center"
      >
        <CustomButton style={style.button} transparent={true}>
          <CustomImage
            src={require('./../../assets/icons/add.png')}
            alt="Add new alert"
          />
        </CustomButton>
        <CustomButton style={style.button} transparent={true}>
          <CustomImage
            src={require('./../../assets/icons/settings.png')}
            alt="Go to settings"
          />
        </CustomButton>
      </ImageBackground>
      <View style={[style.headerBottom, style.bottomBorder]}>
        <Text style={style.pageTitle}>Home</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  headerTop: {
    justifyContent: 'space-between',
    backgroundColor: '#eb9834',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: height * 0.1,
  },
  pageTitle: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    maxWidth: width * 0.1,
    maxHeight: width * 0.1,
    marginHorizontal: width * 0.1,
  },
  headerBottom: {
    height: height * 0.05,
    backgroundColor: '#0390fc',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBorder: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
})

export default Header
