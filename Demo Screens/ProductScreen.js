import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotComponent from '../Product Screen Components/Bot/Bot Component';
import MidComponent from '../Product Screen Components/Mid/Mid Component';
import TopComponent from '../Product Screen Components/Top/Top Component';

export default function ProductScreen(){
    return (
        <View style={styles.container}>
            <View style={{}}>
            <TopComponent/>
            <MidComponent/>
            <BotComponent/>

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