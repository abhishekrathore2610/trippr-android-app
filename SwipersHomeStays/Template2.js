import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Template2 = () => {
  return (
    <View style={styles.container}>
      <Text>Template2</Text>
    </View>
  )
}

export default Template2

const styles = StyleSheet.create({
    container: {
        width:200,
        height:200,
        // borderWidth: 1,
        borderRadius: 10,
       
        shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    marginTop:25,
    marginHorizontal:90
        

    }
})