import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AboutScreen({navigation}) {
    const appDate = new Date().toDateString();
    const myName ='Kruti';
    const appName = 'ToDoApp';

    const handlePress = () => {
        alert ("Hi ! I am Kruti Mistry");
    }
 
  return (
    <MainLayout>
      <Text>AboutScreen</Text>
      <SafeAreaView>
        <Text>{appName}</Text>
        <TouchableOpacity onPress={handlePress}>
            <Text>{myName}</Text>
        </TouchableOpacity>
        <Text>{appDate}</Text>
      
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')}/>
      </SafeAreaView>
      </ MainLayout>
  )
}

const styles = StyleSheet.create({})