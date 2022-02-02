import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../theme/context';
import {Avatar, Box, Text, Icon} from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Chat = ({item}) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View style={styles(colors).container}>
      {
        <Avatar.Group>
          {item.profiles.map((profile) => (
            <Avatar size="lg" source={{uri: profile.profilePic}} />
          ))}
        </Avatar.Group>
      }
      <Box paddingX="4">
        <Text dir="ltr" fontWeight="semibold" fontSize="md">
          {item.profiles.length > 1
            ? item.groupName
            : item.profiles[0].username}
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Text maxW={40} dir="ltr" fontWeight="semibold" fontSize="md">
            {item.unread > 9
              ? '9+ new messages'
              : item.unread > 1
              ? `${item.unread} new messages`
              : item.message}
          </Text>
          <Icon
            as={() => (
              <FontAwesomeIcon
                size={3}
                style={styles(colors).seperatorIcon}
                name="circle"
              />
            )}
          />
          <Text>{item.createdAt}</Text>
        </Box>
      </Box>
    </View>
  );
};

export default Chat;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    seperatorIcon: {
      paddingHorizontal: 6,
      color: colors.grey,
    },
  });
