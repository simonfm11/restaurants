import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/account/Login'

import Account from '../screens/account/Account'

const Stack  =  createStackNavigator()

export default function AccountStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
              name = "account"
              component = {Account}
              options ={{ title : "Cuenta"}}
           />
           <Stack.Screen
              name = "login"
              component = {Login}
              options ={{ title : "Iniciar Sesión"}}
           />
       </Stack.Navigator> 
    )
} 
