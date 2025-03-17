import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";

type Props = {
    home:boolean;
    patients:boolean;
    profile:boolean;
}

export default function TitileTop({
    home,
    patients,
    profile
}:Props) {
  return (
    <>
        <View style={styles.innerView}>
            { home && 
            <>
          <View>
            <Text style={{ color: "#fff", opacity: 0.5 }}>Hello Dr,</Text>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              Amhad Massachesi
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#d1cfd4",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <AntDesign name="user" size={34} color="black" />
          </View></> }
          {patients &&
          <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignContent:'center'}}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Patients</Text>
          </View>}
          {profile &&
          <View style={{width:'100%'}}>
          <View style={{flexDirection:'row', width:'100%', justifyContent:'center', alignContent:'center', marginBottom:20,}}>
            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>Profile</Text>
          </View>
          <View style={{flexDirection:'row', width:'100%', }}>
          <View
            style={{
              backgroundColor: "#d1cfd4",
              width: 60,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              marginRight:10,
            }}
          >
            <AntDesign name="user" size={34} color="black" />
          </View>
          <View>
            <Text style={{color:'#fff', fontSize:18, fontWeight:600,marginBottom:5,}}>Alaas Mohanhad Sisa</Text>
            <View style={{paddingHorizontal:10, paddingVertical:5, backgroundColor:'#ab99d9',borderRadius:5,}}>
              <Text style={{color:'#fff', fontWeight:'bold',}}>info@example.com</Text>
            </View>
          </View>
          </View>
          </View>
          }
        </View>
        {!profile &&
        <View style={styles.searchContainer}>
          <GestureHandlerRootView>
            <View>
              <View
                style={{ position: "absolute", left: 15, top: 18, zIndex: 10 }}
              >
                <AntDesign name="search1" size={24} color="#a6a5a8" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Search Patient"
                placeholderTextColor="#888"
              />

              <TouchableOpacity
                style={{ position: "absolute", right: 15, top: 18, zIndex: 10 }}
              >
                <Feather name="align-center" size={24} color="#a6a5a8" />
              </TouchableOpacity>
            </View>
          </GestureHandlerRootView>
        </View>}
      </>
  )
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
    paddingVertical: 10,
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingLeft: 50,
    borderRadius: 10,
    fontSize: 16,
    color: "#000",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  titleContainer: {
    flexDirection: "row",
    backgroundColor: "#f3f3f3",
    padding: 20,
    width: "100%",
    height: "100%",
  },
});
