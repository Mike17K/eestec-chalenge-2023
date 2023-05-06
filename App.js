import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { app } from './src/database/database';
import ScreenSight from './src/screens/ScreenSight/ScreenSight';
//import Config from 'react-native-config';

export default function App() {
  const urls = [
    'https://i.imgur.com/UYiroysl.jpg',
    'https://i.imgur.com/UPrs1EWl.jpg',
    'https://i.imgur.com/MABUbpDl.jpg',
    'https://i.imgur.com/KZsmUi2l.jpg'
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenSight images={urls} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});