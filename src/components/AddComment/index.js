import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../../theme/context';
import {Avatar, Box, Input, Text} from 'native-base';

const AddComment = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <Box style={styles(colors).container}>
      <Box flexDirection="row" alignItems="center" marginBottom="1">
        <Avatar size={38} source={require('../../assets/png/yashi.jpg')} />
        <Input
          fontSize="lg"
          placeholder="Add a comment..."
          variant="unstyled"
          color={colors.primary}
          placeholderTextColor="rgb(130,130,130)"
        />
      </Box>
      <Text color={colors.grey}>55 minutes ago</Text>
    </Box>
  );
};

export default AddComment;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 14,
      paddingVertical: 7,
    },
    time: {
      color: colors.grey,
    },
  });
