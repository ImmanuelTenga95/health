import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import TitileTop from "@/components/TitileTop";
import PatientInfoList from "@/components/PatientInfoList";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Link } from "expo-router";

export default class patients extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TitileTop home={false} patients={true} profile={false} />
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            paddingVertical: 40,
            marginTop: 10,
          }}
        >
          <GestureHandlerRootView>
            <ScrollView>
              <ScrollView>
              <TouchableHighlight
               activeOpacity={0.6}
               underlayColor="#DDDDDD"
               onPress={() => alert('Pressed!')}
              >
               
                <PatientInfoList />
              </TouchableHighlight>
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
                <PatientInfoList />
              </ScrollView>
            </ScrollView>
          </GestureHandlerRootView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#790edf",
  },
});
