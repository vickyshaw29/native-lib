import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  listContainer: {
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 8,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  listSub:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexBasis: 30,
  },
  textContainer:{
    paddingLeft: 16, paddingRight: 16, display: 'flex', flex: 1
  },
  text:{
    color: '#000000',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  //showMore
  container: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default styles;
