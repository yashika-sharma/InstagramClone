import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ThemeContext} from '../theme/context';
import PagerView from 'react-native-pager-view';
import {Reel} from '../components';
import data from '../data.json';

const Reels = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles(colors).container}>
      <PagerView
        orientation="vertical"
        style={styles(colors).pagerView}
        initialPage={0}>
        {data.explorePosts.map((item, index) => (
          <Reel item={item} key={index} />
        ))}
      </PagerView>
    </View>
  );
};

export default Reels;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    pagerView: {},
  });
