import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { GestureHandlerRootView, ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";
import PatientsActivity from "@/components/PatientsActivity";
import TitileTop from "@/components/TitileTop";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TitileTop home={true} patients={false} profile={false}/>
      <View style={styles.titleContainer}>
        <View style={{width:'100%'}}>
          <GestureHandlerRootView style={{width:'100%', marginBottom:20}}>
          <View style={{width:'100%'}}>
          <ScrollView
           showsHorizontalScrollIndicator={true}
           style={{width:'100%',}}
           horizontal={false}
          >
           <ScrollView
          
           >
            
          <View style={{flexDirection:'row', width:'100%',justifyContent:'space-between', alignItems:'center', padding:10}}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <View style={styles.roundedView}>
              <FontAwesome name="users" size={24} color="#790edf" />
              </View>
              <Text style={styles.textBold}>658+</Text>
              <Text style={styles.textSemibold}>Patients</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <View style={styles.roundedView}>
              <MaterialIcons name="add-call" size={24} color="#790edf" />
              </View>
              <Text style={styles.textBold}>11+</Text>
              <Text style={styles.textSemibold}>Missed Call</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <View style={styles.roundedView}>
              <AntDesign name="message1" size={24} color="#790edf" />
              </View>
              <Text style={styles.textBold}>300+</Text>
              <Text style={styles.textSemibold}>Messages</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <View style={styles.roundedView}>
              <FontAwesome5 name="clinic-medical" size={24} color="#790edf" />
              </View>
              <Text style={styles.textBold}>3</Text>
              <Text style={styles.textSemibold}>Clinic</Text>
            </View>
           
          </View>
          </ScrollView>
          </ScrollView>
          </View>
          </GestureHandlerRootView>

          <PatientsActivity />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#790edf",
  },
  innerView: {
    paddingHorizontal: 20,
    flexDirection: "row",
    paddingVertical:10,
    marginBottom:20,
    justifyContent:'space-between',
    alignItems:'center',
  },
  searchContainer:{
    paddingHorizontal:20,
    flexDirection: "row",
    paddingVertical:10,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
    position:'relative'
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  image: {
    width: '100%', 
    height: '100%',
    resizeMode: 'contain', 
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingLeft:50,
    borderRadius: 10,
    fontSize: 16, 
    color: '#000',
    borderColor: '#ccc', 
    borderWidth: 1, 
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor:'#f3f3f3',
    padding:20,
    width:'100%',
    height:'100%'
  },
  roundedView:{
      backgroundColor:'#d1cfd4',
      width:50,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
  },
  textBold:{
    color:'black',
    fontWeight:'bold',
    fontSize:20,
  },
  textSemibold:{
    color:'#a6a5a8',
    fontWeight:'bold',
  },
  
 
});
