import React from 'react'
import {Text,Image,StyleSheet,View,Dimensions} from 'react-native'
import {bgcolor_1} from '../constant/Constant'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Headerbarmain(){
    return(
        <>
         <View style={styles.Container}>
            <View style={styles.Top_View_left}>
                <View style={styles.menulogo_View}>
                <Image source={require('../images/androidicons/icon/menu.png')} style={styles.menuLogo}/>
                </View>
                <Text style={styles.nameLogo}>CiyaShop</Text>
            </View>
            <View style={styles.Top_View_right}>
                <Image source={require('../images/androidicons/icon/notification.png')} style={styles.cartLogo}/>
                <Image source={require('../images/androidicons/icon/cart.png')} style={styles.cartLogo}/>
            </View>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    Container:{
      width:windowWidth,
      height:windowHeight*.1,
      flexDirection:'row',
    
    },
    Top_View_left:{
      width:windowWidth/2,
      height:windowHeight*.1,
      flexDirection:'row',
      alignItems:'center'
      
    },
    Top_View_right:{
      width:windowWidth/2,
      height:windowHeight*.1,
      alignItems:'center',
      justifyContent:'flex-end',
      flexDirection:'row',
         },
    menulogo_View:{
        width:50,
        height:50,
        backgroundColor:"#AFEEEE",
        marginLeft:15,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
        
    },
    menuLogo:{width:30,height:30,},
    cartLogo:{width:30,height:30,marginRight:10},
    nameLogo:{marginLeft:15,fontSize:20}
  })