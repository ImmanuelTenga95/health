
import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { GestureHandlerRootView, ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from "@react-navigation/native";

function PatientsActivity() {
  return (
    <>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:30}}>
   <Text style={{fontSize:20, fontWeight:'bold'}}>Last Patients Activity</Text>
   <Link to="/" style={{color:'#9f06d8', fontSize:18, fontWeight:'bold'}}>See all</Link>
   </View>
   <GestureHandlerRootView>
     <ScrollView>
   <ScrollView
   >
   <View style={{marginBottom:20,}}>
   <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', alignContent:'center'}}>
   <View style={{flexDirection:'row', gap:8, }}>
     <View style={{backgroundColor:'#ccc',padding:5,borderRadius:5,}}>
       <AntDesign name="user" size={34} color="black" /> 
     </View>
     <View>
       <Text style={{fontSize:16, fontWeight:'bold'}}>Amhed Abde-lah</Text>
       <Text style={styles.textSemibold}>10 Nov 2023</Text>
     </View>
   </View>
   <AntDesign name="right" size={20} color="black" />
   </View>
     <View style={{flexDirection:'row', marginLeft:20, marginTop:5, borderLeftWidth:2, borderLeftColor:'#ccc', padding:10,}}>
       <View>
       <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
       <FontAwesome5 name="whatsapp-square" size={34} color="#25D366" />
       <View>
         <Text style={{fontWeight:'bold', fontSize:16,}}>WhatsApp Message</Text>
         <Text style={{fontSize:14,color:'#a8a7a9'}}>"Hello Dr, I hope you are doing...</Text>
       </View>
       <View style={{alignItems:'center', justifyContent:'center'}}>
         <View style={{backgroundColor:'red', borderRadius:100,padding:3, paddingHorizontal:8}}>
           <Text style={{fontWeight:'bold', color:'#fff'}}>3</Text>
         </View>
       </View>
       </View>
       <View style={{flexDirection:'row', alignItems:'center', gap:25,marginTop:10,}}>
         <MaterialIcons name="add-call" size={34} color="black" />
         <View>
         <Text style={{fontWeight:'bold', fontSize:16,}}>Missed Calls</Text>
         <Text style={{fontSize:14,color:'#a8a7a9'}}>3 Times</Text>
         </View>
       </View>
       </View>
     </View>
   </View>
   <View style={{marginBottom:20,}}>
   <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', alignContent:'center'}}>
   <View style={{flexDirection:'row', gap:8, }}>
     <View style={{backgroundColor:'#ccc',padding:5,borderRadius:5,}}>
       <AntDesign name="user" size={34} color="black" /> 
     </View>
     <View>
       <Text style={{fontSize:16, fontWeight:'bold'}}>Amhed Abde-lah</Text>
       <Text style={styles.textSemibold}>10 Nov 2023</Text>
     </View>
   </View>
   <AntDesign name="right" size={20} color="black" />
   </View>
     <View style={{flexDirection:'row', marginLeft:20, marginTop:5, borderLeftWidth:2, borderLeftColor:'#ccc', padding:10,}}>
       <View>
       <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
       <FontAwesome5 name="whatsapp-square" size={34} color="#25D366" />
       <View>
         <Text style={{fontWeight:'bold', fontSize:16,}}>WhatsApp Message</Text>
         <Text style={{fontSize:14,color:'#a8a7a9'}}>"Hello Dr, I hope you are doing...</Text>
       </View>
       <View style={{alignItems:'center', justifyContent:'center'}}>
         <View style={{backgroundColor:'red', borderRadius:100,padding:3, paddingHorizontal:8}}>
           <Text style={{fontWeight:'bold', color:'#fff'}}>3</Text>
         </View>
       </View>
       </View>
       <View style={{flexDirection:'row', alignItems:'center', gap:25,marginTop:10,}}>
         <MaterialIcons name="add-call" size={34} color="black" />
         <View>
         <Text style={{fontWeight:'bold', fontSize:16,}}>Missed Calls</Text>
         <Text style={{fontSize:14,color:'#a8a7a9'}}>3 Times</Text>
         </View>
       </View>
       </View>
     </View>
   </View>
   <View style={{marginBottom:200,}}>
   <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', alignContent:'center'}}>
   <View style={{flexDirection:'row', gap:8, }}>
     <View style={{backgroundColor:'#ccc',padding:5,borderRadius:5,}}>
       <AntDesign name="user" size={34} color="black" /> 
     </View>
     <View>
       <Text style={{fontSize:16, fontWeight:'bold'}}>Amhed Abde-lah</Text>
       <Text style={styles.textSemibold}>10 Nov 2023</Text>
     </View>
   </View>
   <AntDesign name="right" size={20} color="black" />
   </View>
     <View style={{flexDirection:'row', marginLeft:20, marginTop:5, borderLeftWidth:2, borderLeftColor:'#ccc', padding:10,}}>
       <View>
       <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
       <FontAwesome5 name="whatsapp-square" size={34} color="#25D366" />
       <View>
         <Text style={{fontWeight:'bold', fontSize:16,}}>WhatsApp Message</Text>
         <Text style={{fontSize:14,color:'#a8a7a9'}}>"Hello Dr, I hope you are doing...</Text>
       </View>
       <View style={{alignItems:'center', justifyContent:'center'}}>
         <View style={{backgroundColor:'red', borderRadius:100,padding:3, paddingHorizontal:8}}>
           <Text style={{fontWeight:'bold', color:'#fff'}}>3</Text>
         </View>
       </View>
       </View>
       <View style={{flexDirection:'row', alignItems:'center', gap:25,marginTop:10,}}>
         <MaterialIcons name="add-call" size={34} color="black" />
         <View>
         <Text style={{fontWeight:'bold', fontSize:16,}}>Missed Calls</Text>
         <Text style={{fontSize:14,color:'#a8a7a9'}}>3 Times</Text>
         </View>
       </View>
       </View>
     </View>
   </View>
   </ScrollView>
   </ScrollView>
   </GestureHandlerRootView>
 </>
  )
}

export default PatientsActivity



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
  