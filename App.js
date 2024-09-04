import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Alert } from 'react-native';
import { useEffect } from 'react';
import * as Sentry from '@sentry/react-native';
import * as ExpoExternalPurchase from 'expo-external-purchase';

Sentry.init({
  dsn: 'https://1b75daa4a2773a6c3eac28f52775eb3b@o1258507.ingest.us.sentry.io/4507894851764224',
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

const App =()=>{
  useEffect(()=>{
    console.log(ExpoExternalPurchase);
    const subscription = ExpoExternalPurchase.addExternalPurchaseListener(({ result: newResult }) => {
      console.log(newResult)
    });
    return () => subscription.remove();
  },[])

  const checkIfCanPresent = async () => {
    try {
      const canPresent = await ExpoExternalPurchase.canPresentAsync();
      if (canPresent) {
        try {
          const result = await ExpoExternalPurchase.presentNoticeSheetAsync();
          console.log('Notice sheet presented successfully:', result);
          Sentry.captureMessage(result, "debug");
          Alert.alert('It is working');
        } catch (error) {
          console.error('Failed to present notice sheet:', error);
          Sentry.captureException(new Error(error));
          Alert.alert('Failed to present notice sheet:', error.message); // Add error message for user feedback
        }
      } else {
        Alert.alert('The notice sheet cannot be presented.');
      }
    } catch (error) {
      console.error('Failed to check if can present:', error);
      Sentry.captureException(new Error(error));
      Alert.alert('Failed to check if can present:', error.message); // Add error message for user feedback
    }
  };
    
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

export default Sentry.wrap(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
