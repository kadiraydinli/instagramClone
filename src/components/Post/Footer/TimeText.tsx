import React from 'react';
import { StyleSheet, Text } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { palette } from 'theme';

dayjs.extend(relativeTime);

type TimeTextProps = {
  time: Date;
};

const TimeText: React.FC<TimeTextProps> = ({ time }) => {
  const agoText = dayjs(time).fromNow();
  return <Text style={styles.container}>{agoText}</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
    color: palette.gray2,
    marginTop: 6,
  },
});

export default TimeText;
