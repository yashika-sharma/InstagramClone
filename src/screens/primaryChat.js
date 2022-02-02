import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text} from 'native-base';
import {ThemeContext} from '../theme/context';
import data from '../data.json';
import {Chat} from '../components';

const PrimaryChat = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles(colors).container}>
      {data.chats.map((item, index) => (
        <Chat item={item} key={index} />
      ))}
    </View>
  );
};

export default PrimaryChat;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      padding: 5,
    },
  });
