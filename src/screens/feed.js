import {ScrollView} from 'native-base';
import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../theme/context';
import data from '../data.json';
import {Post, Story} from '../components';

const Feed = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles(colors).container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles(colors).storyView}>
        {data.stories.map((item, index) => (
          <Story key={index} item={item} />
        ))}
      </ScrollView>
      {data.posts.map((item, index) => (
        <Post item={item} key={index} />
      ))}
    </ScrollView>
  );
};

export default Feed;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      alignItems: 'stretch',
      alignSelf: 'stretch',
      backgroundColor: colors.background,
    },
    storyView: {
      backgroundColor: colors.background,
      borderBottomWidth: 0.9,
      borderBottomColor: 'rgb(230,230,230)',
    },
  });
