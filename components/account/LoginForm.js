import React , { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { isEmpty } from 'lodash'

import Loading from '../Loading'
import { validateEmail } from '../../utils/helpers'
import { loginWithEmailAndPassword } from '../../utils/actions'


export default function LoginForm() {
    const [showPassword,setShowPassword] = useState(false)
    const [formData , setFormData] = useState(defaultFormValues())
    const [errorEmail,setErrorEmail]=useState("")
    const [errorPassword,setErrorPassword]=useState("")
    const [loading , setLoading] = useState(false)

    const navigation = useNavigation()

    const onChange =(e, type) => {
        setFormData ({...formData , [type]: e.nativeEvent.text})
    }

    const doLogin = async() =>{
        if(!validateDate()) {
            return;
        }

        setLoading(true)
        const result = await loginWithEmailAndPassword(formData.email , formData.password)
        setLoading(false)

        if(!result.statusResponse){
            setErrorEmail(result.error)
            setErrorPassword(result.error)
            return
        }
        navigation.navigate("account")
    }   

    const validateDate = () =>{
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true

        if(!validateEmail(formData.email)){
            setErrorEmail("Debes de ingresar un email valido")
            isValid = false
        }

        if(isEmpty(formData.password)){
            setErrorEmail("Debes de ingresar tu contrasena ")
            isValid = false
        }
        
        return isValid 
    }

    return (
        <View style ={styles.container}>
            <Input 
              containerStyle={styles.input}
              placeholder="Ingresa tu email..."
              onChange = {(e) => onChange(e, "email")}
              keyboardType ="email-address"
              errorMessage = {errorEmail}
              defaultValue = {formData.email}
            />
            <Input 
              containerStyle={styles.input}
              placeholder="Ingresa tu contrasena..."
              password={true}
              secureTextEntry={!showPassword}
              onChange = {(e) => onChange(e, "password")}
              errorMessage = {errorPassword}
              defaultValue = {formData.password}
              rightIcon={
                  <Icon
                    type="material-community"
                    name={ showPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={styles.icon}
                    onPress={() => setShowPassword(!showPassword)}
                  />
              }
              />
               <Button
               title="Iniciar sesion"
               containerStyle={styles.btnContainer}
               buttonStyle={styles.btn}
               onPress={() => doLogin()}
            />
              <Loading isVisible={loading} text="Inciando sesion ..."/>
        </View>
    )
}

const defaultFormValues = () => {
    return { email : "" , password :""}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    input:{
        width:"100%"
    },
    btnContainer:{
        marginTop:20,
        width:"95%",
        alignSelf:"center"
    },
    btn:{
        backgroundColor: "#d9383f"
    },
    icon:{
        color:"#c1c1c1"
    }
})
