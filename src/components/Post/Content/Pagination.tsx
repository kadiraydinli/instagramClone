import React from 'react';
import { StyleSheet, View } from 'react-native';
import { palette, spacing } from 'theme';

type PaginationProps = {
  activeIndex: number;
  dataLength: number;
};

const Pagination: React.FC<PaginationProps> = ({ dataLength, activeIndex }) => {
  const array = Array.from(Array(dataLength));

  if (dataLength < 2) return null;

  return (
    <View style={styles.container}>
      {array.map((_, index) => (
        <View
          key={index}
          style={[
            styles.badge,
            {
              backgroundColor:
                index === activeIndex ? palette.primary : palette.black20,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 10,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.tiny,
    bottom: -28,
  },
  badge: {
    width: 6,
    height: 6,
    borderRadius: 100,
  },
});

export default Pagination;
