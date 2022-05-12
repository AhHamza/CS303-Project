import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

import Logo from '../assets/OIP.jpg'

export default function Stadium({ navigation }) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image source={Logo} style={styles.image} />
        </View>

        <View style={styles.shapestyle}>
          <TouchableOpacity style={styles.buttonstyle} onPress={() => { alert("Perfecto") }}>
            <Text style={styles.buttontext}>Location</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Services</Text>

        <View style={styles.Services}>
        </View>

        <Text style={styles.text}>Booking dates</Text>

        <View style={styles.Services}>
        </View>

        <Text style={styles.text}>Description</Text>

        <View style={styles.Services}>
        </View>
        <View style={styles.shapestyle}>
          <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Payment') }}>
            <Text style={styles.buttontext}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  image: {
    borderRadius: 5,
    maxWidth: '100%',
    height: 200,
  },
  item: {
    paddingBottom: 10
  },
  text: {
    fontSize: 18,
    paddingTop: 50
  },
  Services: {
    maxWidth: '100%',
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  buttonstyle: {
    backgroundColor: '#3c8d0d',
    width: '60%',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttontext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  shapestyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    fontSize: 30,
    color: '#FFF',

  }
})