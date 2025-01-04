import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native'
import Header from '../layout/common/Header'
import CustomButton from '../input/Buttons/CustomButton'
import CustomTextInput from '../input/TextInput/CustomTextInput'
import { colors } from '../../App'
import { useForm } from 'react-hook-form'

const { width, height } = Dimensions.get('window')

function AddAlertScreen(): React.JSX.Element {
  const { control, handleSubmit } = useForm()

  const onValidSubmit = () => {}
  const onInvalidSubmit = () => {}

  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.Container}
      >
        <CustomTextInput
          title="Name of alert"
          formProps={{ control }}
          onChange={() => {}}
        />
        <CustomTextInput title="Hostname" formProps={{ control }} />
        <CustomTextInput
          title="Password"
          isRequired={false}
          isSecret={true}
          formProps={{ control }}
        />
        <CustomButton
          style={styles.AddButton}
          onPress={handleSubmit(onValidSubmit, onInvalidSubmit)}
        >
          <Text style={styles.AddButtonText}>Add alert</Text>
        </CustomButton>
      </ScrollView>
    </SafeAreaView>
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

export default AddAlertScreen
