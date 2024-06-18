import React, { useState } from 'react'
import { Alert, Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ButtonComponent } from '../../Components/ButtonComponent'
import { TextInputComponent } from '../../Components/TextInput'
import Banner from '../../Assets/digimon4.jpg'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'

export function Login() {

  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigator = useNavigation();

  const handleUser = (value: string) => {
    setUser(value);
  }

  const handlePassword = (value: string) => {
    setPassword(value)
  }

  const handleLogin = () => {
      navigator.navigate("StackHome", {name: "Home"});
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.logo} source={Banner} alt="Banner tela login"/>

        <Image style={styles.digivice} source={require('../../Assets/digivice.png')} alt="Digivice"/>
        <TextInputComponent
          placeholder='Digite seu usuario'
          onChangeValue={handleUser}
        />

        <TextInputComponent
          onChangeValue={handlePassword}
          placeholder='Digite sua senha'
          type={true}
        />

        <ButtonComponent title="Entrar" handleOnChange={handleLogin}/>
      </View>
    </TouchableWithoutFeedback>
  )
}

