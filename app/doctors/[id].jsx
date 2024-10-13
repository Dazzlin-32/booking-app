import { ScrollView, StyleSheet, View } from "react-native";
import { Text ,Card, Button} from "react-native-paper";
import { useLocalSearchParams } from 'expo-router';
import { doctors } from "../../constants/datas";
import { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';

function Details() {
    const { id } = useLocalSearchParams();
    const [doc , setDoc]= useState({})

    useEffect ( ( )=> {
      
        const foundDoctor = doctors.find((x) => x.id == id); // Check the correct property for `id`
        
        setDoc(foundDoctor)
       console.log(doc)
    }, [id])
    
    return ( 
        <ScrollView style={styles.titleContainer}>
           <Card style={styles.cards}>
              <Card.Content>
                <Card.Cover  style= {styles.avatar} source={doc.avatar} />
                <Text style= {{marginHorizontal: 90, marginVertical: 5}} variant="titleLarge">{doc.name}</Text>
                <Text  style= {{marginHorizontal: 130}} variant="titleSmall">{doc.department}</Text>

                <View style= {styles.row}>
                    <Card  style ={styles.rowCards}>
                        <Card.Content style = {{paddingTop:0}}>
                            <Ionicons style={[styles.rowIcons, {backgroundColor:'rgba(122, 206, 250, 0.15)'}]}  name="people-outline" size={30} color="#7ACEFA" />
                            <Text variant="labelLarge">{doc.patients} Patients</Text>
                        </Card.Content>
                    </Card>
                    <Card  style ={styles.rowCards}>
                        <Card.Content style = {{paddingTop:0}}>
                            <MaterialCommunityIcons  style={[styles.rowIcons, {backgroundColor:'rgba(254, 246, 236, 1)'}]} name="medal-outline" size={30} color="#F7C480" />
                            <Text  variant="labelLarge">{doc.experience}</Text>
                        </Card.Content>
                    </Card>  
                </View>
              </Card.Content>
          </Card>
            <View style={styles.body}>
                <Text style={{margin:2}}  variant="titleMedium">About Doctor</Text>
                <Text style={{margin:5}}  variant="bodyMedium">{doc.details}</Text>
                <Text  style={{margin:5}} variant="titleMedium">  Working Time</Text>
                <Text style={{margin:5}} variant="bodyMedium">Mon - Sat (08:30 AM - 09:00 PM)</Text>
                <Text style={{margin:5}} variant="titleMedium">  Communication</Text>
                <View style={{flexDirection:"row", justifyContent: 'flex-start'}}>
                    <Feather style={{backgroundColor:'rgba(254, 246, 236, 1)', margin:10, borderRadius: 10}} name="message-circle" size={35} color="#F7C480" />
                    <View>
                        <Text variant="titleMedium" style={{marginVertical:2}}>Messaging</Text>
                        <Text style={{marginVertical:2}} >Chat me up!</Text>
                    </View>
                </View>
                <Button mode="contained" style={[styles.button, {margin:5}]}>Make an Appointment</Button>
            </View>
         
        </ScrollView>
     );
}

export default Details;
const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      backgroundColor: '#fff',
      //justifyContent: 'space-between',
      //alignItems: 'flex-start',
      gap: 8,
    },
    cards: {
        backgroundColor: 'white',
        marginBottom: 10
    },
   
    avatar : {
        width: 100,
        height :100, 
        borderRadius:80,
        marginLeft: 120,
      },
    row : {
        flexDirection: 'row',
        margin: 5,
        justifyContent : "space-evenly",


    },
    rowCards : {
        width: 'auto',
        backgroundColor: "white",
        paddingTop:0,
        height: 120,
        marginVertical: 5,

    },
    rowIcons : {
        width: 50,
        height: 60,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingTop:20,
        paddingHorizontal: 10,
        marginBottom: 5
        
    },
    body : {
    padding: 20
    },
    button :{
        width: 'auto',
        height: 50,
        marginHorizontal: 20
    },
})