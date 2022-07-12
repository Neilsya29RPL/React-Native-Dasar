import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'
import Operan from './Operan'
export default class StateProps extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sekolah : 'Stellar Academy'
    }
  }

  gantiState(){
    this.setState({
        sekolah : 'SMK Telkom Malang'
    })
  }
  
  render() {
      {/* cara agar lebih ringkas */}
      const {sekolah} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.tittle}> Belajar State dan Props </Text>
        <View style={styles.garis}/>

        {/* isi */}
        <View style={styles.isi}>
            <Text>Ini adalah state : {this.state.sekolah}</Text>
            <Operan sekolah={sekolah}/>

            <TouchableOpacity style={styles.tombol} onPress={() => this.gantiState()}>
                <Text style={{ textAlign:'center'}}>Ganti State</Text>
            </TouchableOpacity>
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
    tombol: {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    }
})


