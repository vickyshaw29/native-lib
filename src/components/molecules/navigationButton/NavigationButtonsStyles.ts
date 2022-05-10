import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    navigationContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 300,
        padding: 2,
        width: '100%',
        zIndex: 999,
    }
});

export default styles;
