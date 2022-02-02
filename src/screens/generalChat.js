import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {ThemeContext} from '../theme/context';

const GeneralChat = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles(colors).container}>
      <Text>General</Text>
    </View>
  );
};

export default GeneralChat;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
