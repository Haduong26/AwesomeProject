import { StyleSheet } from 'react-native';

export default styles = 
    StyleSheet.create({ 
        banner: {
          // flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 20,
          marginTop: 30
        },
        ava: {
          height:50,
          width: 50,
          borderRadius: 30,
          marginRight: 20,
        },
        paragraph: {
          fontSize: 20,
          paddingTop: 10,
        },
        logoutText: {
          fontSize: 20,
          fontWeight: 700,
          color: "lightgrey",
        },
        logoutBtn: {
          width: 150,
          borderRadius: 10,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          backgroundColor: "#3b3b3b",
        },
        buttonContainer: {
          marginTop: '70%',
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }
    })
