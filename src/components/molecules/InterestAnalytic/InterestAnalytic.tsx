import React from 'react';
import {Card} from '..';
import {ProgressChart} from 'react-native-chart-kit';
import {View, Text, TextStyle} from 'react-native';
import styles from './AnalyticStyles';

type InterestAnalyticProps={
    style?:TextStyle
}

const InterestAnalytic:React.FC<InterestAnalyticProps> = ({style}) => {
  return (
    <Card style={styles.container}>
      <ProgressChart
        data={[0.4]}
        width={20}
        height={20}
        strokeWidth={3}
        radius={8}
        hideLegend={true}
        chartConfig={{
          backgroundColor: '#fafafa',
          backgroundGradientFrom: '#fafafa',
          backgroundGradientTo: '#fafafa',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 130, 200, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 2,
            ...style
          },
        }}
      />
      <View
        style={{
          flex: 1,
          marginLeft: 16,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          Categoria 1
        </Text>
      </View>
    </Card>
  );
};

export default InterestAnalytic;
