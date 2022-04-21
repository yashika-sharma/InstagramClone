import React from 'react';
import {Chats, Feed} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image, TouchableOpacity} from 'react-native';
import {Icon, Pressable, Text} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();

const FeedStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={({navigation}) => {
        return {
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
                  <Icon
                    as={() => <FontAwesome size={27} name="plus-square" />}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 5, padding: 10}}
                  onPress={() => navigation.navigate('Chats')}>
                  <Icon as={() => <FontAwesome size={27} name="comment" />} />
                </TouchableOpacity>
              </View>
            );
          },
        };
      }}
      name="Feed"
      component={Feed}
    />
    <Stack.Screen
      options={({navigation}) => {
        return {
          headerTitle: '',
          headerBackgroundContainerStyle: {
            borderWidth: 0,
          },

          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 8,
                borderWidth: 0,
              }}>
              <Pressable>
                <Icon
                  style={{marginHorizontal: 7, fontSize: 22}}
                  as={<FontAwesome name="arrow-left" />}
                />
              </Pressable>
              <Text fontSize="2xl" fontWeight="semibold">
                yashiiiix
              </Text>
              <Pressable>
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
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <TouchableOpacity
                onPress={() => alert('pressed1')}
                style={{marginRight: 20}}>
                <Icon as={() => <FontAwesome size={25} name="bars" />} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginRight: 5}}
                onPress={() => navigation.navigate('Chats')}>
                <Icon as={() => <FontAwesome size={25} name="edit" />} />
              </TouchableOpacity>
            </View>
          ),
        };
      }}
      name="Chats"
      component={Chats}
    />
  </Stack.Navigator>
);

export default FeedStack;
