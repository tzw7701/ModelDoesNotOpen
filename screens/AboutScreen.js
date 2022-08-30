import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './NavigationScreen'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>Abode Screen</Text>
      <Navigation />
    </View>

  );
}
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
