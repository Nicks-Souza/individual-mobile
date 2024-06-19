import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import { styles } from './style'; 

export function Profile() {
const navigation = useNavigation();

const handleLogout = () => {
    navigation.navigate('StackLogin', { name: 'Login' });
};

return (
    <View style={styles.container}>
    <View style={styles.profileImageContainer}>
        <Image
        source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQEtlbdKSCG8QQ/profile-displayphoto-shrink_800_800/0/1683131967057?e=1724284800&v=beta&t=dq5OSHey1N19D0fud5aX55z0WQpkg-cyfe7PBRSdfZE' }} 
        style={styles.profileImage}
        />
    </View>

    <TextInput
        style={styles.input}
        placeholder="Usuário"
        value="Felipão o brabo"
        editable={false} 
    />

    <TextInput
        style={styles.input}
        placeholder="Senha"
        value="********" 
        editable={false} 
    />


    <CustomButton
        title="Sair"
        onPress={handleLogout}
        buttonStyle={styles.buttonLogout}
        textStyle={{ color: 'black', fontSize: 18 }} 
    />
    </View>
);
}
