import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'


export default function InfoUser({ user }) {
    console.log(user)
    return (
        <View style={styles.container}>
            <Avatar
              rounded
              size ="large"
              source={
                  user.photoURL ? { uri:photoURL } 
                  : require("../../assets/avatar.jpg")
              }
            />
            <View style={styles.infoUser}>
               <Text style={styles.displayName}>
                   {
                       user.displayName ? user.displayName : "Anonimo"
                   }
               </Text>
               <Text>{user.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        alignItems : "center",
        justifyContent :"center",
        flexDirection: "row",
        backgroundColor :"#F9F9F9",
        paddingVertical : 30
    },
    infoUser:{
        marginLeft : 20
    },
    displayName:{
        fontWeight:"bold",
        paddingBottom:5
    }
})
