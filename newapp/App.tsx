import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './compoments/FlatCard'
import ElevatedCard from './compoments/ElevatedCard'
import FancyCard from './compoments/FancyCard'
import ActionCard from './compoments/ActionCard'
import ContactList from './compoments/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCards />
          <ElevatedCard/>
          <FancyCard/>
          <ActionCard/>
          <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App