import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    color: '#ffff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    fontFamily: 'Poppins_400Regular'
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: "space-between"
  },
  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20
  },

  totalConnections: {
    marginTop: 40,
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    maxWidth: 140,
  }
});

export default styles;