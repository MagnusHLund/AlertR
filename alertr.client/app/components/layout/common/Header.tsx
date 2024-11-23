import React, { useEffect } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native'
import CustomButton from '../../input/Buttons/CustomButton'
import CustomImage from '../../content/CustomImage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined
  Settings: undefined
  AddAlert: undefined
}

const { height, width } = Dimensions.get('window')

const BackButton = (
  navigation: NativeStackNavigationProp<RootStackParamList>
) => {
  return (
    <CustomButton
      style={style.button}
      transparent={true}
      onPress={() => navigation.navigate('Home')}
    >
      <CustomImage
        src={require('./../../../assets/icons/Arrow.png')}
        alt="Go back to Home page"
      />
    </CustomButton>
  )
}

const SettingsButton = (
  navigation: NativeStackNavigationProp<RootStackParamList>
) => {
  return (
    <CustomButton
      style={style.button}
      transparent={true}
      onPress={() => navigation.navigate('Settings')}
    >
      <CustomImage
        src={require('./../../../assets/icons/settings.png')}
        alt="Go to settings"
      />
    </CustomButton>
  )
}

const AddButton = (
  navigation: NativeStackNavigationProp<RootStackParamList>
) => {
  return (
    <CustomButton
      style={style.button}
      transparent={true}
      onPress={() => navigation.navigate('AddAlert')}
    >
      <CustomImage
        src={require('./../../../assets/icons/add.png')}
        alt="Create new alert"
      />
    </CustomButton>
  )
}

const Header = () => {
  const route = useRoute()
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const isHomeScreen = route.name === 'Home'

  return (
    <View>
      <ImageBackground
        style={[style.headerTop, style.bottomBorder]}
        source={require('./../../../assets/icons/AlertR-transparent.png')}
        resizeMode="center"
      >
        {!isHomeScreen && BackButton(navigation)}
        {isHomeScreen && AddButton(navigation)}
        {isHomeScreen && SettingsButton(navigation)}
      </ImageBackground>
      <View style={[style.headerBottom, style.bottomBorder]}>
        <Text style={style.pageTitle}>
          {route.name === 'AddAlert' ? 'Add new alert' : route.name}
        </Text>
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
