import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import TitileTop from '@/components/TitileTop'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Personal Info',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Medical History',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Medication',
  },
  {
    id: '58694a0f-3da1-471f-bd96-144571e274672',
    title: 'X-Ray',
  },
  {
    id: '58994a0f-3da1-471f-bd96-144571e2789672',
    title: 'Documents',
  },
  {
    id: '58734a0f-3da1-471f-bd96-144571e2784472',
    title: 'Prescription',
  },
];
type ItemProps = {title: string};

const Item = ({title}:ItemProps)=>{
  <View>
    <Text>{title}</Text>
  </View>
}

export default class profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TitileTop home={false} patients={false} profile={true} />
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            paddingVertical: 40,
            marginTop: 10,
          }}
        >
          <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#790edf",
  },
});