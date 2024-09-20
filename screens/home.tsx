import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffde59',
    height: '100%',
  },
  logo: {
    width: 320,
    height: 150,
  },
  button: {
    borderRadius: 4,
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#ffbd59',
    shadowColor: '#ff914d',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
    borderBottomWidth: 8,
    borderBottomColor: '#d88e3d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
        <Text style={styles.buttonText}>Ir para Gráficos</Text>
      </TouchableOpacity>
    </View>
  );
}
