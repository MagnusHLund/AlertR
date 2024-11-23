import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import Header from '../layout/common/Header'
import CustomButton from '../input/Buttons/CustomButton'

function AddAlertScreen(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Name *</Text>
        <Text>Hostname *</Text>
        <Text>password</Text>
        <CustomButton>
          <Text>Add alert</Text>
        </CustomButton>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddAlertScreen
