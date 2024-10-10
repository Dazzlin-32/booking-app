import {View, StyleSheet , ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Card, Button } from 'react-native-paper';
import { Link } from 'expo-router';
const hospitalImg = require('../../assets/images/HOSPITAL.png')



export default function HomeScreen() {
  return (
      <ScrollView style={styles.titleContainer} >

        <Text variant="titleMedium" style={styles.welcome}>Welcome to Hospital Appointment</Text>
        <Image 
        style={styles.coverImage}
        source={hospitalImg}></Image>
        <Link href="./doctors" style= {styles.doctors}>
        <Card >
          <Card.Content>
            <Text variant="titleLarge">Looking for a Doctor?
            </Text>
            <Text variant="bodyMedium">Check out our specialists here!
            <Button style={styles.buttonIcon} icon="arrow-right-circle-outline" > </Button>
            </Text>
           
          </Card.Content>
       </Card>
        </Link>
        <View>
        <Text variant="titleMedium" style={styles.departments}>Our Departments</Text>
        <View style = {styles.row}>
          <Card style={styles.cards}>
            <Card.Content>
              <Card.Cover style= {styles.cardIcons} source={require('../../assets/images/brain.png')} />
              <Text variant="titleMedium">Neurology</Text>
            </Card.Content>
          </Card>
          <Card style={styles.cards}>
              <Card.Content>
                <Card.Cover  style= {styles.cardIcons} source={require('../../assets/images/DNA.png')} />
                <Text variant="titleMedium">Genetics</Text>
              </Card.Content>
          </Card>
          <Card style={styles.cards}>
              <Card.Content>
                <Card.Cover  style= {styles.cardIcons} source={require('../../assets/images/dental.png')} />
                <Text  variant="titleMedium">Dentist</Text>
              </Card.Content>
          </Card>

        </View>
        </View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'space-between',
    //alignItems: 'flex-start',
    gap: 8,
  },
  welcome :{
    paddingTop: 40,
    paddingBottom: 10,
    marginLeft: 10,
    paddingLeft: 10,
  },
  coverImage :{
    margin: 20,
    width: 350,
    borderRadius: 20,
  },
  buttonIcon : {
    width :80,
    height: 50,
    marginLeft : 100

  },
  departments : {
    margin: 10,
  },
  doctors : {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8,
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  cards: {
    marginHorizontal: 5,
  },
  cardIcons : {
    width: 70,
    height :70, 
  },
});
