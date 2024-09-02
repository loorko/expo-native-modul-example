import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Alert } from 'react-native';
import * as ExpoExternalPurchase from 'expo-external-purchase';
import { useEffect } from 'react';

export default function App() {
  useEffect(()=>{
    console.log(ExpoExternalPurchase);
  },[])

  const checkIfCanPresent= async() => {
    try {
      const canPresent = await ExpoExternalPurchase.canPresentAsync();
      if (canPresent) {
        Alert.alert('The notice sheet can be presented.')
        try {
          const result = await ExpoExternalPurchase.presentNoticeSheetAsync('yolo');
          console.log('Notice sheet presented successfully:', result);
        } catch (error) {
          console.error('Failed to present notice sheet:', error);
        }
      } else {
        Alert.alert('The notice sheet cannot be presented.')
      }
    } catch (error) {
      console.error('Failed to check if can present:', error);
    }
  }
    
  return (
    <View style={styles.container}>
      <Text>Instacar</Text>
      <StatusBar style="auto" />
      <Button
        onPress={checkIfCanPresent}
        title={'Apple Expo External Purchase'}
      />
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
