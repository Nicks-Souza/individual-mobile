import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB',
    },
    text: {
    fontSize: 18,
    marginBottom: 20,
    },

    
    buttonLogout: {
        backgroundColor: '#ADD8E6',
        height: 50,
        width: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    profileImageContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden', 
        marginBottom: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      profileImage: {
        width: 150,
        height: 150,
      },
      input: {
        height: 40,
        width: '90%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
      },
    });