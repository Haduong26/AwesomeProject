import { StyleSheet } from 'react-native';

export default styles = 
    StyleSheet.create({ 
      container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        inputView: {
          borderRadius: 10,
          width: 250,
          height: 60,
          marginBottom: 20,
          backgroundColor: "lightgrey",
        },
        TextInput: {
          fontSize: 20,
          height: 50,
          flex: 1,
          paddingLeft: 20,
        },
        loginText: {
          fontSize: 20,
          fontWeight: 700,
          color: "lightgrey",
        },
        eyeContainer: {
          position: 'absolute',
          right: 20,
          zIndex: 1,
        },
        eyeIcon: {
          width: 20,
          height: 20,
          marginTop: 20,
        },
        loginBtn: {
          width: 150,
          borderRadius: 10,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          backgroundColor: "#3b3b3b",
        },

        error: {
          marginTop: 10,
          fontSize: 20,
          color:'red'
        }
    })
