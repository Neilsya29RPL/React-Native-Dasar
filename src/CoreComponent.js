import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import cat from './assets/cat.png'

const CoreComponent = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          //import gambar menggunakan uri
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Image
          //import gambar dari assets
          source={cat}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default CoreComponent;