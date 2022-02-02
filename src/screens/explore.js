import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ThemeContext} from '../theme/context';
import {Box, ScrollView, Input, Icon, FlatList} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import data from '../data.json';
import {ExplorePost} from '../components';

const Explore = () => {
  const {colors} = useContext(ThemeContext);

  const sortPosts = () => {
    const nonReels = data.explorePosts.filter(
      (post) => post.type === 'image' || post.type === 'video',
    );
    const reels = data.explorePosts.filter((post) => post.type === 'reel');
    reels.forEach((item, index) => {
      nonReels.splice(index * 3 + 2, 0, item);
    });
    return nonReels;
  };
  return (
    <SafeAreaView style={styles(colors).container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles(colors).scrollView}>
        <Input
          marginX={15}
          padding="3"
          isFullWidth
          fontSize="lg"
          borderRadius="12.5"
          variant="outlined"
          placeholder="Search"
          placeholderTextColor="rgb(100,100,100)"
          backgroundColor={'rgb(229,229,229)'}
          InputLeftElement={
            <Icon
              as={() => (
                <FontAwesome
                  size={23}
                  style={{marginLeft: 18}}
                  color={'rgb(50,50,50)'}
                  name="search"
                />
              )}
            />
          }
        />
        <Box flexDirection="row" style={styles(colors).listWrapper}>
          {sortPosts().map((item, index) => (
            <ExplorePost item={item} key={index} />
          ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {},
    listWrapper: {
      flexWrap: 'wrap',
      marginVertical: 17,
    },
  });
