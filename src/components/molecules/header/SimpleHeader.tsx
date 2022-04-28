import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useTheme from '../../../hooks/theme/useTheme';
import {SimpleHeaderT} from '../../../interfaces/atomInterface';
import styles from './SimpleHeaderStyles';

const SimpleHeader = ({
  onLeftIconName,
  onLeftAction,
  onLeftIconStyle,
  onRightIconName,
  onRightAction,
  onRightIconStyle,
  headerTitle,
  barStyle,
}: SimpleHeaderT) => {
  const {palette} = useTheme();
  // const primaryColor = activeApp?.data?.modules?.core?.theme?.palette?.primary || '#0000f4';
  const primaryColor = palette?.primary || '#0000f4';

  return (
    <View
      style={[
        styles.headerContainer,
        {backgroundColor: primaryColor, ...barStyle},
      ]}>
      <FontAwesome5.Button
        backgroundColor="transparent"
        underlayColor="#0000d20f"
        iconStyle={{...onLeftIconStyle}}
        color="#fff"
        onPress={onLeftAction}
        name={onLeftIconName || 'home'}
        size={24}
      />
      <Text style={styles.headerTitle}>{headerTitle}</Text>

      {onRightIconName && (
        <View style={{marginLeft: 'auto'}}>
          <FontAwesome5.Button
            backgroundColor="transparent"
            underlayColor="#0000d20f"
            iconStyle={{...onRightIconStyle}}
            color="#fff"
            onPress={onRightAction}
            name={onRightIconName}
            size={22}
          />
        </View>
      )}
    </View>
  );
};

export default SimpleHeader;
