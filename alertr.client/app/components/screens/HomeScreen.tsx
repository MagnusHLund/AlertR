import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Header from '../layout/common/Header'

function HomeScreen(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
