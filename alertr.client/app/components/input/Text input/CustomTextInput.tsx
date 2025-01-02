import React from 'react'
import {
  Dimensions,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import IStandardInput from '../IStandardInput'

interface ICustomTextInputProps extends IStandardInput {
  title?: string
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>
  isRequired?: boolean
  isSecret?: boolean
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

const { width, height } = Dimensions.get('window')

const CustomTextInput: React.FC<ICustomTextInputProps> = ({
  onChange,
  title = '',
  isRequired = true,
  isSecret = false,
  style = StyleSheet.create({}),
}) => {
  return (
    <View style={styles.Container}>
      {title !== '' && (
        <View style={styles.TitleContainer}>
          <Text style={styles.Title}>{title}</Text>
          <Text style={styles.Required}>{isRequired ? ' *' : ''}</Text>
        </View>
      )}
      <TextInput
        onChange={onChange}
        style={styles.TextInput}
        secureTextEntry={isSecret}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: width * 0.9,
    alignSelf: 'center',
    margin: height * 0.01,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
  },
  TitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginLeft: width * 0.025,
  },
  Title: {
    fontWeight: '500',
  },
  Required: {
    color: 'red',
    fontWeight: '900',
  },
})

export default CustomTextInput
