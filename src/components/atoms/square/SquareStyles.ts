import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  squareContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    margin: 8,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
