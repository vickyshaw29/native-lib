import React from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import styles from './DashboardStyles';
import {useNavigation} from '@react-navigation/native';

const components = ['Quiz','StoryBook'];

const Dashboard = () => {
  type Nav = {
    navigate: (value: string) => void;
  };
  const {navigate} = useNavigation<Nav>();
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <FlatList
          data={components}
          renderItem={({item}) => (
            <View key={item} style={styles.textContainer}>
            <Text  onPress={() => navigate(item)} style={styles.txt}>
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
