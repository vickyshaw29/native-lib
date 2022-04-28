import React, {useState} from 'react';
import CircleCheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Alert, TextStyle} from 'react-native';
import {SJText} from '../../atoms';
import ShowMoreBox from './ShowMoreBox';
import useTheme from '../../../hooks/theme/useTheme';
import styles from './listStyles';

type Props = {
  title: string;
  selectable?: boolean;
  finished?: boolean;
  checked?: boolean;
  showMore?: string;
  onChange?: any;
  style?: TextStyle;
};

const ListItem = ({
  title,
  selectable,
  finished,
  checked,
  showMore,
  onChange,
  style,
}: Props) => {
  const [collapsed, set_collapsed] = useState(true);
  const {palette} = useTheme();

  const disabledColor = palette?.disabledColor || '#cccccc';
  const primary = palette?.primary || '#000033';
  return (
    <View
      style={[
        styles.listContainer,
        {opacity: !selectable || finished ? 0.7 : 1},
        style,
      ]}>
      <View style={styles.listSub}>
        <View style={styles.checkboxContainer}>
          {!finished && selectable && (
            <CircleCheckBox
              onTintColor={disabledColor}
              onCheckColor={disabledColor}
              value={checked}
              onValueChange={newValue =>
                Alert.alert('Attenzione', 'La categoria è bloccata')
              }
              boxType="circle"
            />
          )}

          {finished && (
            <FontAwesome5
              // iconStyle={{marginRight: 0}}
              color="#666666"
              size={24}
              onPress={() =>
                Alert.alert(
                  'Non ci sono più contenuti per te in questa categoria. Selezionane un altra.',
                )
              }
              name="clipboard-check"
            />
          )}
          {!selectable && (
            <CircleCheckBox
              onTintColor={disabledColor}
              onCheckColor={disabledColor}
              value={checked}
              onValueChange={newValue =>
                Alert.alert('Attenzione', 'La categoria è bloccata')
              }
              boxType="circle"
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <SJText style={styles.text}>{title}</SJText>
        </View>
        <View
          style={{
            flexBasis: 40,
          }}>
          <FontAwesome5.Button
            backgroundColor="transparent"
            underlayColor="#0000d20f"
            iconStyle={{marginRight: 0}}
            color="#666666"
            size={18}
            name={collapsed ? 'chevron-down' : 'chevron-up'}
            onPress={() => set_collapsed(!collapsed)}
          />
        </View>
      </View>

      <ShowMoreBox collapsed={collapsed} showMore={showMore} />
    </View>
  );
};

export default ListItem;
