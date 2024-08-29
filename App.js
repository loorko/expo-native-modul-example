import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ExpoExternalPurchase from 'expo-external-purchase';
import { useEffect } from 'react';

export default function App() {
  useEffect(()=>{
    if (ExpoExternalPurchase && ExpoExternalPurchase.version) {
      console.log(`ExpoExternalPurchase modul version: ${ExpoExternalPurchase.version}`);
      console.log(ExpoExternalPurchase);
    } else {
      console.log('ExpoExternalPurchase version information not exist');
    }
  },[])

  return (
    <View style={styles.container}>
      <Text>New content new build</Text>
      <StatusBar style="auto" />
      <Text>{ExpoExternalPurchase.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
