import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function RoundedRectangle({text,left,right,onPress}) {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <TouchableOpacity style={{ backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderWidth:1,
        padding: 10,
        marginLeft:left,
        marginRight:right,
        marginTop:15
        }}
        onPress={onPress}>
        <Text style={{ color: '#313131',fontSize:20,textAlign:'center'}}>{text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
