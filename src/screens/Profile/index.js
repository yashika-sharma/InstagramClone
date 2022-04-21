import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '../../theme/context';
import {
  Avatar,
  Box,
  Heading,
  Pressable,
  ScrollView,
  Text,
  Icon,
  Image,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import data from '../../data.json';
import {Path} from 'react-native-svg';

const Profile = () => {
  const {colors} = useContext(ThemeContext);

  const RenderItem = ({item}) => {
    return (
      <Box
        backgroundImage={{uri: item.image}}
        width={'33.3%'}
        borderWidth={0.8}
        borderColor={colors.background}>
        <Image
          source={{uri: item.image}}
          alt="post"
          resizeMode="cover"
          flex={1}
          width="100%"
          height="130"
        />
      </Box>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles(colors).container}>
      <Box
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        paddingY="2">
        <Icon
          as={() => (
            <Ionicons
              name="add-circle"
              size={31}
              color="#5CACEE"
              style={styles(colors).icon}
            />
          )}
        />
        <Box flexDirection="row">
          <Box alignItems="center" marginX="2">
            <Heading fontSize="2xl" fontWeight="semibold">
              21
            </Heading>
            <Text fontSize="lg">Posts</Text>
          </Box>
          <Box alignItems="center" marginX="2">
            <Heading fontWeight="semibold">130</Heading>
            <Text fontSize="lg">Followers</Text>
          </Box>
          <Box alignItems="center" marginX="2">
            <Heading fontWeight="semibold">180</Heading>
            <Text fontSize="lg">Following</Text>
          </Box>
        </Box>
      </Box>
      <Text fontSize="xl" fontWeight="semibold" paddingX="4">
        Yashika
      </Text>
      <Text fontSize="lg" paddingX="4" marginY="-1" fontWeight="light">
        Chandigarh, India
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingY="5"
        marginX="4">
        <Pressable
          borderWidth="1"
          borderColor={'rgb(210,210,210)'}
          paddingX="4"
          paddingY="1"
          borderRadius="6">
          <Text fontSize="18" fontWeight="500">
            Edit Profile
          </Text>
        </Pressable>
        <Pressable
          borderWidth="1"
          borderColor={'rgb(210,210,210)'}
          paddingX="4"
          paddingY="1"
          borderRadius="6">
          <Text fontSize="18" fontWeight="500">
            Ad Tools
          </Text>
        </Pressable>
        <Pressable
          borderWidth="1"
          borderColor={'rgb(210,210,210)'}
          paddingX="4"
          paddingY="1"
          borderRadius="6">
          <Text fontSize="18" fontWeight="500">
            Insights
          </Text>
        </Pressable>
      </Box>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        paddingX="4"
        contentContainerStyle={styles(colors).scrollview}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Box marginX="-1.5" key={item}>
            <Box
              width={'78.5%'}
              borderWidth="2"
              borderRadius="71"
              borderColor="rgb(217,217,217)"
              paddingY="1"
              paddingX="1"></Box>
            <Text
              lineHeight={21}
              numberOfLines={1}
              width={'75%'}
              textAlign="center"
              fontWeight="light"
              fontSize="15">
              Cats Serotonin
            </Text>
          </Box>
        ))}
        <Box alignItems="center">
          <Box>
            <Icon
              as={() => (
                <Ionicons
                  size={88}
                  name="add-circle-outline"
                  color={'rgb(150,150,150)'}
                />
              )}
            />
          </Box>
          <Text
            lineHeight={18}
            textAlign="center"
            fontWeight="light"
            fontSize="18">
            New
          </Text>
        </Box>
      </ScrollView>
      <Box
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        paddingY="2">
        <Box width={'33.3%'} alignItems="center">
          <Icon
            as={() => (
              <FontAwesome size={27.5} color="rgb(70,70,70)" name="th" />
            )}
          />
        </Box>

        <Box width={'33.3%'} alignItems="center">
          <Icon viewBox="0 0 50 50" size="md">
            <Path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z" />
          </Icon>
        </Box>
        <Box width={'33.3%'} alignItems="center">
          <Icon
            as={() => (
              <FontAwesome size={26} color="rgb(70,70,70)" name="id-card" />
            )}
          />
        </Box>
      </Box>
      <Box flexDirection="row" flexWrap="wrap">
        {data.explorePosts.map((item, index) => (
          <RenderItem item={item} key={index} />
        ))}
      </Box>
    </ScrollView>
  );
};

export default Profile;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
    scrollview: {
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
      paddingBottom: 9,
    },
    icon: {
      position: 'absolute',
      left: '23%',
      top: '72%',
    },
  });
