import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({navigation}) {
  return (
    <MainLayout>
      <Text>HomeScreen</Text>
      <Button title='Go to About' onPress={() => navigation.navigate('About')}/>
      </MainLayout>
  )
}

const styles = StyleSheet.create({})