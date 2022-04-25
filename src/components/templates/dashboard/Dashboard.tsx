import React from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import styles from './DashboardStyles';
import {useNavigation} from '@react-navigation/native';

const components = ['Button','Input','Text','Quiz'];

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
