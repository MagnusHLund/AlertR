import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native'

import Header from './components/layout/Header'

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
