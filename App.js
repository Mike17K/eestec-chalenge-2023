import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { app } from './src/database/database';
import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Root from './src/Navigator/Root';
import Welcome from './src/components/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}