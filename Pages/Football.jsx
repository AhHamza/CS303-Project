import { TouchableOpacity, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { React, useState } from "react";
import Logo from '../assets/OIP.jpg'

export default function Football({ navigation }) {
  const [value, setValue] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.screen}>
          <View style={styles.itemstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Image source={Logo} style={styles.image} />
            <View style={styles.cont}>
            <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Stadium') }}>
              <Text style={styles.buttontext}>Price : 20 L.E/hour</Text>
              <Text style={styles.buttontext}>For more info press here</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Image source={Logo} style={styles.image} />
            <View style={styles.cont}>
            <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Text style={styles.buttontext}>Price : 20 L.E/hour</Text>
              <Text style={styles.buttontext}>For more info press here</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Image source={Logo} style={styles.image} />
            <View style={styles.cont}>
            <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Text style={styles.buttontext}>Price : 20 L.E/hour</Text>
              <Text style={styles.buttontext}>For more info press here</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Image source={Logo} style={styles.image} />
            <View style={styles.cont}>
            <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Text style={styles.buttontext}>Price : 20 L.E/hour</Text>
              <Text style={styles.buttontext}>For more info press here</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Image source={Logo} style={styles.image} />
            <View style={styles.cont}>
            <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Text style={styles.buttontext}>Price : 20 L.E/hour</Text>
              <Text style={styles.buttontext}>For more info press here</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Image source={Logo} style={styles.image} />
            <View style={styles.cont}>
            <TouchableOpacity style={styles.buttonstyle} onPress={() => { navigation.navigate('Stadium') }}>
            <Text style={styles.buttontext}>Price : 20 L.E/hour</Text>
              <Text style={styles.buttontext}>For more info press here</Text>
            </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemstyle: {
    maxWidth: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 100,
  },
  screen: {
    padding: 20,
  },
  image: {
    borderRadius: 10,
    maxWidth: '100%',
    height: 100,
  },
  buttonstyle: {
    backgroundColor: '#3c8d0d',
    width: '80%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  cont: {
    alignItems: 'center',
  }
})