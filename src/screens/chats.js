import {Input, Icon} from 'native-base';
import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {ThemeContext} from '../theme/context';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {ChatTabs} from '../navigation';

const windowHeight = Dimensions.get('window').height;

const Chats = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <ScrollView contentContainerStyle={styles(colors).container}>
      <Input
        size="xl"
        variant="unstyled"
        borderRadius="9"
        bgColor="rgb(240,240,240)"
        placeholder="Search"
        isFullWidth
        padding={11}
        marginX={4}
        InputLeftElement={
          <Icon
            as={() => (
              <FontAwesome
                size={20}
                style={{
                  backgroundColor: 'rgb(240,240,240)',
                  paddingVertical: 11.7,
                  paddingLeft: 10,
                }}
                color={'rgb(170,170,170)'}
                name="search"
              />
            )}
          />
        }
        InputRightElement={
          <Icon
            as={() => (
              <FontAwesome
                size={20}
                style={{
                  backgroundColor: 'rgb(240,240,240)',
                  paddingVertical: 11.7,
                  paddingRight: 10,
                }}
                color={'rgb(170,170,170)'}
                name="sliders-h"
              />
            )}
          />
        }
      />
      <ChatTabs />
    </ScrollView>
  );
};

export default Chats;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      paddingVertical: 0,
      height: windowHeight,
    },
  });
