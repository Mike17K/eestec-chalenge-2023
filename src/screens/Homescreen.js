



import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Eikones from '../components/Eikones';

const icon = require('../../assets/left.png');

const Homescreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={{ marginRight: 10 }}>
          
          <Image source={icon} style={{ width: 30, height: 30, backgroundColor: '#E5E7EB', borderRadius: 20, }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  

  return (
    <View>
      
      <ScrollView>
        <Eikones id="12" title="Perioxes" description="Kentriki ellada" />
        <Eikones id="123" title="Perioxes" description="Kentriki ellada" />
        <Eikones id="1234" title="Perioxes" description="Kentriki ellada" />
        <Eikones id="12345" title="Perioxes" description="Kentriki ellada" />
      </ScrollView>
    </View>
  );
};

export default Homescreen;
