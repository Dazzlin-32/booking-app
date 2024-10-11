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
      
       setDoc( doctors.find((id) => id === id))
       console.log(doc)
    })
    
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
                           
                        </Card.Content>
                    </Card>

                    
                </View>
              </Card.Content>
          </Card>
          {
                                doc.doctors &&  doc.doctors.map (
                                    (doctor) => (
                                        <Card  style ={styles.rowCards}>
                                        <Card.Content style = {{paddingTop:0}}>
                                            <Ionicons style={[styles.rowIcons, {backgroundColor:'rgba(122, 206, 250, 0.15)'}]}  name="people-outline" size={30} color="#7ACEFA" />
                                            <Text variant="titleLarge">{doctor.name}</Text>
                                           
                                        </Card.Content>
                                        </Card>
                                        
                                       

                                )
                                )
                            }
         
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
    button :{
        width: 'auto',
        height: 50,
        marginHorizontal: 20
    },
})