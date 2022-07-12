import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Operan extends Component {
  render() {
      {/* cara agar lebih simpel */}
      const{sekolah} = this.props
    return (
      <View>
        <Text> Ini adalah Props : {this.props.sekolah} </Text>
      </View>
    )
  }
}

export default Operan
