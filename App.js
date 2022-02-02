import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import ThemeProvider from './src/theme/context';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation';

export default function App() {
  return (
    <NativeBaseProvider config={{suppressColorAccessibilityWarning: true}}>
      <NavigationContainer>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
