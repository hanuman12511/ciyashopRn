import React from 'react'
import {Text,Image,StyleSheet,View,Dimensions} from 'react-native'
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default function Imageslider(){

return(
    <>
    <View style={styles.Container}>
        <Image source={require('../images/androidicons/food/mixfood.png')}  style={styles.banner_img}/>
    </View>
    </>
)

}
const styles=StyleSheet.create({
    Container:{
        width:W,
        flexDirection:'row',
        backgroundColor:"#AFEEEE",
    },
    banner_img:{
        flex:1,
        height:H*.3,
        resizeMode: 'contain'

    }
})