import { Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function Trial() {
    return ( 
       

      <SafeAreaView  style={styles.titleContainer}>

          <Link href="/trialRoute" >
            
              <Text>Trial</Text>
            
          </Link>  
      </SafeAreaView>
     
     );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
