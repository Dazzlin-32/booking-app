import { Text, Pressable, StyleSheet, SafeAreaView, View } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { Card } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



export default function Trial() {
  const { name, department, date } = useLocalSearchParams(); // Extract params from the URL
    return ( 
       

      <SafeAreaView  style={styles.titleContainer}>
        {name ?
          <View>
            <Card  style ={styles.rowCards}>
                        <Card.Content style = {{paddingTop:0}}>
                            <MaterialCommunityIcons  style={[styles.rowIcons, {backgroundColor:'rgba(254, 246, 236, 1)'}]} name="medal-outline" size={30} color="#F7C480" />
                            <Text   variant="labelLarge">Doctor's Name: {name}</Text>
                            <Text  variant="labelLarge">Department: {department}</Text>
                            <Text  variant="labelLarge">Apointment Date: {date}</Text>
                        </Card.Content>
                    </Card> 
            
          </View>
          :
          <View>
            <Text>No Appointments Yet!</Text>
          </View>

        
        }
        
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
