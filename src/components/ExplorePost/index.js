import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../../theme/context';
import {Box, ScrollView, Input, Icon, FlatList, Image} from 'native-base';

const ExplorePost = ({item}) => {
  const {colors} = useContext(ThemeContext);

  const Reel = () => {
    return (
      <Box style={styles(colors).containerReel}>
        <Image
          source={{uri: item.image}}
          flex={1}
          resizeMode="cover"
          alt="image"
        />
      </Box>
    );
  };

  const NonReel = () => {
    return (
      <Box style={styles(colors).containerNonReel}>
        <Image
          source={{uri: item.image}}
          flex={1}
          resizeMode="cover"
          alt="image"
        />
      </Box>
    );
  };
  switch (item.type) {
    case 'reel': {
      return <Reel />;
    }
    default: {
      return <NonReel />;
    }
  }
};

export default ExplorePost;

const styles = (colors) =>
  StyleSheet.create({
    containerReel: {
      width: '34%',
      marginHorizontal: 1,
      marginVertical: 1,
      borderColor: colors.background,
      backgroundColor: colors.background,
    },
    containerNonReel: {
      width: '32%',
      aspectRatio: 1,
      borderColor: colors.background,
      marginHorizontal: 1,
      marginVertical: 1,
    },
  });
