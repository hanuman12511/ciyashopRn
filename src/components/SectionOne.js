import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default function SectionOne(){
    return(
        <>
        <View style={styles.container}>

        </View>
        </>

    )
}
const styles = StyleSheet.create({
    container:{
        height:H*.1,
        width:W,
        backgroundColor:"#E42257"
    }
})