import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";

function PatientInfoList() {
  return (
    <>
   
    <View>
      <View
        style={styles.innerView}
      >
        <View style={{ flexDirection: "row", gap: 8 }}>
          <View
            style={{ backgroundColor: "#ccc", padding: 5, borderRadius: 5 }}
          >
            <AntDesign name="user" size={34} color="black" />
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Amhed Abde-lah
            </Text>
            <Text style={styles.textSemibold}>Last visit: 10 Sep 2023</Text>
          </View>
        </View>
        <Link href="/profile/123">
        <AntDesign name="right" size={20} color="black" />
        </Link>
      </View>
      </View>
      
    </>
  );
}

export default PatientInfoList;

const styles = StyleSheet.create({
  textSemibold: {
    color: "#a6a5a8",
    fontWeight: "bold",
  },
  innerView:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal:20,
    paddingVertical:10,
    marginBottom:20,
  }
});
