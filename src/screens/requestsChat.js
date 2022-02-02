import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';
import {ThemeContext} from '../theme/context';

const RequestsChat = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles(colors).container}>
      <Text>Requests</Text>
    </View>
  );
};

export default RequestsChat;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
