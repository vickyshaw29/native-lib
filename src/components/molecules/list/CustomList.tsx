import React from 'react';
import {View, FlatList, Text, SafeAreaView} from 'react-native';
import styles from './ListStyles';
import {ListProps} from '../../../interfaces/atomInterface';

const CustomList = ({data,isNavigate,navigate,style}: ListProps) => {
  return (
    <SafeAreaView style={[styles.sectionContainer,style]}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View key={item} style={styles.textContainer}>
            <Text
              onPress={() => isNavigate && navigate && navigate(item)}
              style={styles.txt}>
              {item}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CustomList;
