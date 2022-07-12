import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DesainTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tittle}> Belajar Desain Tampilan dan Flebox </Text>
        <View style={styles.garis}/>

        {/* Isi */}
        <View>
            <Text style={styles.isi}>Flex direction Row (Vertical)</Text>
            <View style={styles.flexVertikal}>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakHijau}/>
            </View>

            <Text style={styles.isi}>Flex direction Column (Horizontal)</Text>
            <View style={{flexDirection: 'column'}}>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakHijau}/>
            </View>

            {/* Perataan */}
            <Text style={styles.isi}>Justify Content</Text> 
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakHijau}/>
            </View>

            <Text style={styles.isi}>Align Item</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.kotakMerah}/>
                <View style={styles.kotakBiru}/>
                <View style={styles.kotakHijau}/>
            </View>
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
    flexVertikal: {
        flexDirection: 'row'
    },
    kotakBiru : {
        width: 50,
        height: 25,
        backgroundColor: 'blue'
    },
    kotakMerah : {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    kotakHijau : {
        width: 50,
        height: 50,
        backgroundColor: 'green'
    },
})


