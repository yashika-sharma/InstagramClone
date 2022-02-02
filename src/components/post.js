import React, {useContext} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Box, Avatar, Text, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../theme/context';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {AddComent} from '../components';

const Post = ({item}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles(colors).container}>
      <Box
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        marginX="4"
        style={styles(colors).deetView}>
        <Box flexDirection="row" alignItems="center">
          <Box style={styles(colors).tinyProfileWrapper}>
            <Avatar size={39} source={{uri: item.image}} />
          </Box>
          <Text
            color={colors.primary}
            marginLeft="2"
            fontSize="lg"
            fontWeight="semibold">
            {item.username}
          </Text>
        </Box>
        <Icon
          as={() => (
            <Ionicons
              color={colors.primary}
              size={23}
              name="ellipsis-vertical"
            />
          )}
        />
      </Box>
      <Image
        source={{
          uri: item.image,
        }}
        alt="post"
        resizeMode="contain"
        style={styles(colors).postImage}
      />
      <Box style={styles(colors).actionView}>
        <Box flexDirection="row" alignItems="center">
          <Icon
            as={() => (
              <Ionicons
                style={styles(colors).actionIcon}
                size={34}
                name="heart-outline"
                color={colors.primary}
              />
            )}
          />
          <Icon
            as={() => (
              <FontAwesome
                style={[
                  styles(colors).actionIcon,
                  {transform: [{rotateY: '180deg'}]},
                ]}
                size={29}
                name="comment"
                color={colors.primary}
              />
            )}
          />
          <Icon
            as={() => (
              <FontAwesome
                style={styles(colors).actionIcon}
                size={26}
                name="paper-plane"
                color={colors.primary}
              />
            )}
          />
        </Box>
        <Icon
          as={() => (
            <Ionicons
              style={styles(colors).actionIcon}
              size={34}
              name="bookmark-outline"
              color={colors.primary}
            />
          )}
        />
      </Box>
      <Box paddingX="4">
        <Text
          color={colors.primary}
          lineHeight="2xs"
          style={styles(colors).text}
          fontWeight="semibold"
          fontSize="xl">
          {item.likes} likes
        </Text>
        <Text
          color={colors.primary}
          lineHeight="xs"
          fontWeight="medium"
          fontSize="xl"
          numberOfLines={2}>
          <Text lineHeight="xs" fontWeight="bold" fontSize="xl">
            {item.username}
          </Text>

          {item.caption}
        </Text>
      </Box>
      <AddComent />
    </View>
  );
};

export default Post;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      paddingVertical: 8,
      backgroundColor: colors.background,
    },
    tinyProfileWrapper: {
      padding: 2,
      borderWidth: 1.9,
      borderColor: 'pink',
      borderRadius: 30,
    },
    postImage: {
      height: 415,
      borderTopWidth: 0.6,
      borderColor: 'rgb(230,230,230)',
      borderBottomWidth: 0.6,
    },
    deetView: {
      paddingTop: 0,
      paddingBottom: 7,
    },
    actionView: {
      paddingTop: 5,
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    actionIcon: {
      marginHorizontal: 5,
    },
    text: {
      padding: 0,
      margin: 0,
    },
  });
