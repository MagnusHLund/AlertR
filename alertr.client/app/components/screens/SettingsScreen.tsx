import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from '../layout/common/Header'

function SettingsScreen(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* Settings.tsx - cooldown */}
        {/* Settings.tsx - dark mode */}
        {/* CustomButton.tsx - ID, copy by click */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default SettingsScreen
