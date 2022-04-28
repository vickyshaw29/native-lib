import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  //ErrorView
  errorContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //LoadingView
  loadingViewContainer:{
    position: 'absolute',
    zIndex: 999,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
