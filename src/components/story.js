import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../theme/context';
import {Avatar, Text} from 'native-base';

const Story = ({item}) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={styles(colors).individualStoryView}>
      <View style={styles(colors).storyProfileWrapper}>
        <Avatar
          source={require('../assets/yashi.jpg')}
          style={styles(colors).storyProfile}
          size={78}
        />
      </View>
      <Text color={colors.primary} style={styles(colors).storyUsername}>
        {item.username}
      </Text>
    </View>
  );
};

export default Story;

const styles = (colors) =>
  StyleSheet.create({
    individualStoryView: {
      marginVertical: 5,
      marginHorizontal: 0,
      alignItems: 'center',
      padding: 5,
    },
    storyProfile: {
      height: 50,
      width: 50,
    },
    storyProfileWrapper: {
      borderWidth: 2.5,
      padding: 3,
      borderRadius: 43,
      borderColor: 'rgb(255,192,203)',
    },
    storyUsername: {
      fontSize: 16,
      marginVertical: 3,
    },
  });
