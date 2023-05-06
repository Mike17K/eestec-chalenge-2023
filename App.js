import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { app } from './src/database/database';
import ScreenSight from './src/screens/ScreenSight/ScreenSight';
//import Config from 'react-native-config';

export default function App() {
  const urls = [
    { src: 'https://i.imgur.com/UYiroysl.jpg' },
    { src: 'https://i.imgur.com/UPrs1EWl.jpg' },
    { src: 'https://i.imgur.com/MABUbpDl.jpg' },
    { src: 'https://i.imgur.com/KZsmUi2l.jpg' },
    { src: 'https://i.imgur.com/2nCt3Sbl.jpg' },
    { src: 'https://i.imgur.com/lceHsT6l.jpg' },
    { src: 'https://i.imgur.com/0M82nEIl.jpg' },
    { src: 'https://i.imgur.com/0M82nEIl.jpg' },
    { src: 'https://i.imgur.com/0M82nEIl.jpg' },
    { src: 'https://i.imgur.com/0M82nEIl.jpg' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenSight discription={"discription . . ."} shightTitle={"lol"} images={urls} />
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