import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    backgroundColor: '#fff',
    zIndex: 9999,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
