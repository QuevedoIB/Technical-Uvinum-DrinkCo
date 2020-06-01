import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '$primaryDark',
    borderRadius: 25,
  },
  input: {
    width: '$screenWidth * 0.8',
    paddingLeft: 12,
    fontSize: 16,
    height: 50,
  },
  error: {
    color: 'red',
    marginBottom: 6,
    width: '$screenWidth * 0.8',
    fontSize: 14,
  },
});

export default styles;
