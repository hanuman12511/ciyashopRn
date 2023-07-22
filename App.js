import React from 'react'
import {Text,StyleSheet,View,Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App(){
  return(
    <>
    <View style={styles.Container}>
      <View style={styles.Top_View_left}>
       <Text style={{color:"red"}}>Hello app</Text>
      </View>
       <View style={styles.Top_View_right}>
       <Text style={{color:"red"}}>Hello app</Text>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  Container:{
    width:windowWidth,
    height:windowHeight*.1,
    backgroundColor:'yellow',
    flexDirection:'row'
  },
  Top_View_left:{
    width:windowWidth/2,
    height:windowHeight*.1,
    backgroundColor:'blue'
  },
  Top_View_right:{
    width:windowWidth/2,
    height:windowHeight*.1,
    backgroundColor:'tan'
  }
})