import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import CustomButton from '../../input/Buttons/CustomButton'
import { useForm } from 'react-hook-form'

interface IForm {
  children: React.ReactNode
  onValidSubmit: () => void
  onInvalidSubmit: () => void
}

const { height, width } = Dimensions.get('window')

const Form: React.FC<IForm> = ({
  children,
  onValidSubmit,
  onInvalidSubmit,
}) => {
  const { handleSubmit } = useForm()

  return (
    <View>
      {children}
      <CustomButton
        style={styles.AddButton}
        onPress={handleSubmit(onValidSubmit, onInvalidSubmit)}
        formProps={}
      ></CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingTop: height * 0.015,
  },
  AddButton: {
    alignSelf: 'center',
    width: 'auto',
    padding: 10,
    borderRadius: 10,
    marginTop: height * 0.015,
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  AddButtonText: {
    fontWeight: '500',
  },
})

export default Form
