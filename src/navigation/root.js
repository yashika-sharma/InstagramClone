import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feed, Explore, Reels, Activity, Profile} from '../screens';
import {Icon, Avatar, Text, Box, Pressable, Heading} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Path} from 'react-native-svg';
import {View, TouchableOpacity, Image} from 'react-native';
import {FeedStack} from '../navigation';

const getComponent = (iconName, iconType) => {
  switch (iconType) {
    case 'Ionicons':
      return <Ionicons name={iconName} />;
    default:
      return <MaterialIcons name={iconName} />;
  }
};

const Tab = createBottomTabNavigator();

const IconsForTab = ({focused, color, size}, route) => {
  if (route.name === 'FeedStack') {
    const iconComponent = focused
      ? getComponent('home', 'Foundation')
      : getComponent('home-outline', 'Ionicons');
    return <Icon name="home" size={35} as={iconComponent} />;
  } else if (route.name === 'Explore') {
    const iconComponent = focused
      ? getComponent('search', 'Ionicons')
      : getComponent('search-outline', 'Ionicons');
    return <Icon name="home" size={8} as={iconComponent} />;
  } else if (route.name === 'Activity') {
    const iconComponent = focused
      ? getComponent('heart', 'Ionicons')
      : getComponent('heart-outline', 'Ionicons');

    return <Icon name="home" size={30} as={iconComponent} />;
  } else if (route.name === 'Profile') {
    return (
      <Avatar
        style={{borderWidth: focused ? 2 : 0}}
        size="sm"
        source={require('../assets/png/yashi.jpg')}>
        Yashika
      </Avatar>
    );
  } else if (route.name === 'Reels') {
    const iconComponent = focused ? (
      <Icon viewBox="0 0 50 50">
        <Path d="M13.34 4.13L20.26 16H4v-1C4 9.48 8.05 4.92 13.34 4.13zM33.26 16L22.57 16 15.57 4 26.26 4zM46 15v1H35.57l-7-12H35C41.08 4 46 8.92 46 15zM4 18v17c0 6.08 4.92 11 11 11h20c6.08 0 11-4.92 11-11V18H4zM31 32.19l-7.99 4.54C21.68 37.49 20 36.55 20 35.04v-9.08c0-1.51 1.68-2.45 3.01-1.69L31 28.81C32.33 29.56 32.33 31.44 31 32.19z" />
      </Icon>
    ) : (
      <Icon viewBox="0 0 50 50">
        <Path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z" />
      </Icon>
    );
    return iconComponent;
  }
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) =>
          IconsForTab({focused, color, size}, route),
        headerTitle: '',
        headerLeft: () => {
          return (
            <Image
              style={{
                width: '65%',
                flex: 1,
                marginHorizontal: 10,
              }}
              source={require('../assets/png/insta.png')}
            />
          );
        },
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => alert('pressed1')}
                style={{marginRight: 8, padding: 8}}>
                <Icon as={() => <FontAwesome size={27} name="plus-square" />} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginRight: 5, padding: 10}}
                onPress={() => navigation.navigate('Chats')}>
                <Icon as={() => <FontAwesome size={27} name="comment" />} />
              </TouchableOpacity>
            </View>
          );
        },
      })}>
      <Tab.Screen
        name="FeedStack"
        options={{headerShown: false}}
        component={FeedStack}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          headerTransparent: true,
          headerLeft: null,
          headerRight: () => (
            <Icon
              marginRight="4"
              size={41}
              as={<Ionicons name="camera-outline" />}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerRight: null,
          headerLeft: () => (
            <Text fontSize="3xl" color="primary" marginX="5" marginBottom="2">
              Activity
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <Box marginX="5" marginBottom="1">
              <Pressable alignItems="center" flexDirection="row">
                <Heading fontWeight="medium">Yashi</Heading>
                <Icon
                  as={() => (
                    <Ionicons
                      size={20}
                      style={{marginHorizontal: 6, marginTop: 2}}
                      name="chevron-down-outline"
                    />
                  )}
                />
              </Pressable>
            </Box>
          ),
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => alert('pressed1')}
                  style={{marginRight: 4, padding: 6}}>
                  <Icon
                    as={() => <FontAwesome size={27} name="plus-square" />}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 5, padding: 8}}
                  onPress={() => alert('pressed2')}>
                  <Icon as={() => <Ionicons size={28} name="menu" />} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
