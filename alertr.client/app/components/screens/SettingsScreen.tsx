import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from '../layout/Header'

function SettingsScreen(): React.JSX.Element {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </ScrollView>
  )
}

export default SettingsScreen
