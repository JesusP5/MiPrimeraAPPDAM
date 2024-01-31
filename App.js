import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App=()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.textHelloWorld}>Hola mundo</Text>
      <Text style={styles.textSecondaryText} >Me llamo Jesus</Text>
      <Text style={styles.textThirdText}>Estamos aqui en la casita</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHelloWorld:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'arial'
  },
  textSecondaryText:{
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'arial'
  
  },
  textThirdText:{
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'arial'
  
  }
});
export default App;