import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {ThemeContext} from '../theme/context';
import {Avatar, Box, Pressable, Text, Icon} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';

import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reel = ({item, key}) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View key={key} style={styles(colors).container}>
      <ImageBackground
        style={styles(colors).image}
        source={{uri: 'https://source.unsplash.com/random'}}
        alt="reel"
        resizeMode="cover">
        <Text
          paddingY="10"
          paddingX="7"
          fontSize="3xl"
          fontWeight="bold"
          color="white">
          Reels
        </Text>
        <Box style={styles(colors).actions}>
          <Box width="60%">
            <Box alignItems="center" flexDirection="row">
              <Avatar
                style={styles(colors).profile}
                size="9"
                source={require('../assets/yashi.jpg')}
              />
              <Text
                marginLeft="2"
                color={'white'}
                fontSize="lg"
                fontWeight="bold">
                {item.username}
              </Text>
              <Icon
                as={() => (
                  <FontAwesomeIcon
                    style={styles(colors).icon}
                    color="white"
                    name="circle"
                    size={8}
                  />
                )}
              />
              <Pressable>
                <Text fontWeight="bold" color={'white'} fontSize="lg">
                  Follow
                </Text>
              </Pressable>
            </Box>
            <Text marginY="2" fontWeight="bold" color={'white'} fontSize="lg">
              {item.caption}
            </Text>

            <Text
              numberOfLines={1}
              marginY="0"
              fontWeight="bold"
              color={'white'}
              shadow={true}
              fontSize="lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At esse
            </Text>
          </Box>
          <Box alignItems="center">
            <Icon
              as={() => (
                <Ionicons color="white" size={40} name="heart-outline" />
              )}
            />
            <Text
              numberOfLines={1}
              marginBottom="6"
              fontWeight="bold"
              color={'white'}
              shadow={true}
              fontSize="lg">
              12k
            </Text>
            <Icon
              as={() => (
                <FontAwesomeIcon5
                  color="white"
                  style={{
                    transform: [
                      {
                        rotateY: '180deg',
                      },
                    ],
                  }}
                  size={35}
                  name="comment"
                />
              )}
            />
            <Text
              numberOfLines={1}
              marginBottom="6"
              fontWeight="bold"
              color={'white'}
              shadow={true}
              fontSize="lg">
              12k
            </Text>
            <Icon
              as={() => (
                <FontAwesomeIcon5 color="white" size={29} name="paper-plane" />
              )}
            />
            <Text
              numberOfLines={1}
              marginBottom="7"
              fontWeight="bold"
              color={'white'}
              shadow={true}
              fontSize="lg">
              12k
            </Text>
            <Icon
              style={{marginBottom: 7}}
              as={() => (
                <Ionicons color={'white'} size={25} name="ellipsis-vertical" />
              )}
            />
            <Image
              source={require('../assets/yashi.jpg')}
              style={styles(colors).music}
            />
          </Box>
        </Box>
      </ImageBackground>
    </View>
  );
};

export default Reel;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      height: '100%',
      width: '100%',
      backgroundColor: colors.background,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    image: {
      width: windowWidth,
      height: windowHeight,
      aspectRatio: 1 / 2,
      //  width: '100%',
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      paddingBottom: 100,
    },
    actions: {
      flexDirection: 'row',
      flex: 1,
      paddingHorizontal: 20,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    firstRow: {},

    profile: {
      marginHorizontal: 6,
    },
    icon: {
      marginHorizontal: 10,
    },
    arrow: {
      transform: [
        {
          rotate: '45deg',
        },
      ],
    },
    music: {
      height: 40,
      width: 40,
      resizeMode: 'cover',
      marginTop: 25,
      borderWidth: 2.5,
      borderRadius: 8,
      borderColor: 'white',
    },
  });
