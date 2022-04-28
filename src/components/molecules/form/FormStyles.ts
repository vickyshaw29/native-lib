import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderStyle: 'solid',
    borderRadius: 4,
    zIndex: 99,
  },
  textInput: {
    fontFamily: 'DMSans-Regular',
    backgroundColor: '#ffffff',
    color: '#000',
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2.22,
    elevation: 3,
  },
  icon:{
    position: 'absolute',
    top: '50%',
    fontSize: 22,
    marginTop: -10,
    right: 16,
  }
});

export default styles;
