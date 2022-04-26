import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  containerActive: {
    marginTop: 'auto',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  quizContainer: {
    marginTop: 'auto',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  activeTitleContainer: {
    marginTop: 32,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  quizTitleContainer: {
    marginTop: 32,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  question: {
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 16,
  },
  answer:{
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    elevation: 5,
  }
});

export default styles;
