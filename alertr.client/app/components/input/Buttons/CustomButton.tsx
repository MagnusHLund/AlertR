import React, { ReactNode } from 'react'
import {
  Dimensions,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'
import IStandardInput from '../IStandardInput'

interface ICustomButtonProps extends IStandardInput {
  transparent?: boolean
  children: ReactNode
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>
}

const { width } = Dimensions.get('window')

const CustomButton: React.FC<ICustomButtonProps> = ({
  onPress,
  transparent = false,
  children,
  control,
  style = StyleSheet.create({}),
}) => {
  const backgroundStyle = {
    backgroundColor: transparent ? 'transparent' : 'white',
  }

  return (
    <TouchableOpacity
      style={[styles.button, backgroundStyle, style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    color: 'white',
    width: width * 0.1,
    flexShrink: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CustomButton
