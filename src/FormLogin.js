import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity, TextInput, Alert} from 'react-native'

export default class FormLogin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username : '',
       password : '',
       isLogin : false
    }
  }

  login = () => {
      if(!this.state.username && !this.state.password){
          Alert.alert("Error", "Username dan Password harus diisi")
      }else{
        this.setState({
            isLogin : true
        })
      }
  }
  
  render() {
      const {username, password, isLogin} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.tittle}>Belajar Membuat Form</Text>
        <View style={styles.garis}/>

        {/* isi */}
        <View style={styles.isi}>
           <View style={styles.wrapperInput}>
               <Text>Username : </Text>
               <TextInput
                    style={styles.textInput}
                    placeholder="Masukkan Username"
                    value={username}
                    onChangeText={(username) => this.setState({username})}
               />
           </View>

           <View style={styles.wrapperInput}>
               <Text>Password : </Text>
               <TextInput
                    style={styles.textInput}
                    placeholder="Masukkan Password"
                    value={password}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
               />
           </View>

           <TouchableOpacity style={styles.button} onPress={() => this.login()}>
               <Text style={styles.textButton}>LOGIN</Text>
           </TouchableOpacity>
            
            {isLogin &&
                <Text style={{marginTop: 20}}>
                    Selamat Berhasil Login :  {username}
                </Text>
            }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {padding:30},
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    garis: {
        borderBottomWidth: 1,
        marginTop: 10
    },
    isi: {
        fontSize: 14,
        marginTop: 30,
        marginBottom : 30
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        marginTop: 10,
        borderRadius: 5,
        height: 40
    },
    wrapperInput: {
        marginTop: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
})


