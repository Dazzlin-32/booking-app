import { ScrollView,StyleSheet , View} from "react-native";
import { Text, Searchbar, Card } from "react-native-paper";
import { doctors } from "../../constants/datas";
import { Link } from "expo-router";

function Doctors() {
    return (
        <ScrollView style={styles.titleContainer}>
             <Searchbar style= {styles.searchBar}
                    placeholder="Search"
                    onChangeText={()=>{}}
                    value={()=> {}}
                    />
                <View style={styles.doctors}>
                {
                doctors.map(
                    (doctor)=> (
                       
                        <Link  href= {"/doctors/" + doctor.id}>
                            <Card  style={{ width: 170, height: 150 }}>
                                <Card.Content>
                                    <Card.Cover  style= {styles.avatar} source={doctor.avatar } />
                                    <Text variant="titleMedium"> {doctor.name}
                                    </Text>
                                    <Text style={styles.department} variant="bodySmall"> {doctor.department}
                                    </Text>
                                
                                </Card.Content>
                            </Card>
                        </Link>
                    )
                )
            }
                </View>
           
        </ScrollView>
      );
}

export default Doctors;
const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      backgroundColor: '#fff',
      //justifyContent: 'space-between',
      //alignItems: 'flex-start',
      gap: 8,
    },
    searchBar : {
        margin: 5
    },
    doctors : {
        marginHorizontal: 20,
        marginVertical: 5,
        width: 'auto',
        flexDirection: 'row',
        flexWrap : 'wrap',
        alignItems: "flex-start",
        gap: 10
          },
    avatar : {
        width: 70,
        height :70, 
        borderRadius: 30,
        marginLeft: 30
      },
    department: {
        marginLeft : 30,
    },
})