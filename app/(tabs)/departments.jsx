import { ScrollView,StyleSheet , View, SafeAreaView} from "react-native";
import { Text, Searchbar, Card } from "react-native-paper";
import { departments, doctors } from "../../constants/datas";
import { Link } from "expo-router";

function Departments() {
    return (
        
            <ScrollView style={styles.titleContainer}>
                <Searchbar style= {styles.searchBar}
                        placeholder="Search"
                        onChangeText={()=>{}}
                        value={()=> {}}
                        />
                    <View style={styles.departments}>
                    {
                    departments.map(
                        (department)=> (
                        
                            <Link  key={department.id} href= {"/"+ department.id}>
                                <Card  style={{ width: 150, height: 90 }}>
                                    <Card.Content>
                                        <Card.Cover  style= {styles.avatar} source={department.logo } />
                                        <Text style= {{width: 140}} variant="titleMedium"> {department.name}
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

export default Departments;
const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      backgroundColor: '#fff',
      //justifyContent: 'space-between',
      //alignItems: 'flex-start',
      gap: 8,
    },
    searchBar : {
        margin: 5,
        backgroundColor:'rgba(254, 246, 236, 1)'
    },
    departments : {
        marginHorizontal: 20,
        marginVertical: 5,
        flexDirection: 'row',
        flexWrap : 'wrap',
        justifyContent :'center',
        alignItems: "center",
        gap: 10,
          },
    avatar : {
        width: 50,
        height :50, 
        borderRadius: 30,
        marginLeft: 20
      },
    department: {
        
    },
})