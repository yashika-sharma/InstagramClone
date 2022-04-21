import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../../theme/context';
import data from '../../data.json';
import {Heading, Box, Avatar, Image, Text, ScrollView} from 'native-base';

const Activity = () => {
  const {colors} = useContext(ThemeContext);

  const sortData = () => {
    const onedayList = data.activity.filter((item) => item.time === '1d');
    const twodayList = data.activity.filter((item) => item.time === '2d');
    return [
      onedayList,
      twodayList,
      data.activity.filter((item) => item.time === '3d'),
    ];
  };

  const Activity = ({item}) => {
    return (
      <Box
        marginY="2"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Box
          padding="0.5"
          borderColor="pink.300"
          borderWidth="2.5"
          borderRadius="45">
          <Avatar source={{uri: item.profilePic}} height="55" width="55" />
        </Box>
        <Text
          marginX="2"
          fontWeight="normal"
          flex={1}
          color={colors.primary}
          fontSize="17">
          {item.body}{' '}
          <Text fontSize="17" color={colors.grey}>
            {item.time}
          </Text>
        </Text>
        <Image alt="image" source={{uri: item.image}} height="47" width="47" />
      </Box>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles(colors).container}>
      <Heading fontSize="xl" marginY="2" fontWeight="semibold">
        Today
      </Heading>
      {sortData()[0].map((item, id) => (
        <Activity item={item} key={id} />
      ))}
      <Heading fontSize="xl" marginY="2" fontWeight="semibold">
        Yesterday
      </Heading>
      {sortData()[1].map((item, id) => (
        <Activity item={item} key={id} />
      ))}
      <Heading fontSize="xl" marginY="2" fontWeight="semibold">
        This week
      </Heading>
      {sortData()[2].map((item, id) => (
        <Activity item={item} key={id} />
      ))}
    </ScrollView>
  );
};

export default Activity;

const styles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      padding: 12,
    },
  });
