import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MidComponent from '../Product Screen Components/Mid/Mid Component';
import TopComponent from '../Product Screen Components/Top/Top Component';

export default function ProductScreen(){
    return (
        <View style={styles.container}>
            <View style={{}}>
            <TopComponent/>
            <MidComponent/>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#018622',
    },
  });