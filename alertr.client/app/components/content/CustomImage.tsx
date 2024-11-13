import React from 'react'
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native'

interface ICustomImageProps {
  src: ImageSourcePropType
  alt: string
}

const { width, height } = Dimensions.get('window')

const CustomImage: React.FC<ICustomImageProps> = ({ src, alt }) => {
  return <Image source={src} alt={alt} style={styles.image}></Image>
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})

export default CustomImage
