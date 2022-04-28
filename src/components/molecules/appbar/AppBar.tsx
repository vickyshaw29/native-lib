import React, {useEffect} from 'react';
import useTheme from '../../../hooks/theme/useTheme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, TouchableWithoutFeedback} from 'react-native';
import {IconPlaceholder} from '../../atoms';
import styles from './AppBarStyles';


// getting error while rendering this component in the storybook
const AppBar: React.FC<{
  title: string;
  onLeftIconName?: string;
  onLeftAction?: any;
  onHiddenAction?: any;
  onRightIconName?: string;
  onRightAction?: any;
}> = props => {
  const {palette} = useTheme();
  const primaryColor = palette?.primary || '#0000f4';
  const logo = '';

  const [hiddenActionPressCount, set_hiddenActionPressCount] =
    React.useState(0);
  const hiddenActionTimeOut = React.useRef<any>();
  useEffect(() => {
    // Elimino i timeout derivanti dai click precedenti

    try {
      clearTimeout(hiddenActionTimeOut.current);
    } catch (error) {}

    // Dopo 5 secondi resetto tutto

    hiddenActionTimeOut.current = setTimeout(() => {
      try {
        set_hiddenActionPressCount(0);
      } catch (error) {}
    }, 5000);
  }, [hiddenActionPressCount]);

  useEffect(() => {
    // Elimino i timeout derivanti dai click precedenti

    if (hiddenActionPressCount === 5) {
      props.onHiddenAction();
    }
  }, [hiddenActionPressCount]);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {props.onLeftIconName ? (
          <FontAwesome5.Button
            backgroundColor="transparent"
            underlayColor="#0000d20f"
            iconStyle={{marginRight: 0}}
            color={primaryColor}
            size={24}
            name={props.onLeftIconName}
            onPress={props.onLeftAction}
          />
        ) : (
          <IconPlaceholder />
        )}
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              set_hiddenActionPressCount(hiddenActionPressCount + 1);
            }}>
            {/* <FirebaseStorageImage
						path={logo}
						style={{
							height: 60,
							width: 200,
							resizeMode: 'cover',
						}}
					/> */}
          </TouchableWithoutFeedback>
        </View>
        {props.onRightIconName ? (
          <FontAwesome5.Button
            backgroundColor="transparent"
            underlayColor="#0000d20f"
            iconStyle={{marginRight: 0}}
            color={primaryColor}
            size={24}
            name={props.onRightIconName}
            onPress={props.onRightAction}
          />
        ) : (
          <IconPlaceholder />
        )}
      </View>
    </View>
  );
};

export default AppBar;
