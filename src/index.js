import React, { Component } from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';

import Picker from "./Picker";

class ScrollingComponent extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const start = 1900;
        const values = new Array(new Date().getFullYear() - start + 1)
        .fill(0)
        .map((_, i) => {
            const value = start + i;
            return { value, label: `${value}` };
        })
        .reverse();
        const defaultValue = 1990 - start;

        return(
            <View style={styles.container}>
                <Text style={styles.title}>What year were you born?</Text>
                <Picker {...{ values, defaultValue }} />
            </View>
        );
    }
}

class YearPicker extends Component{

}

class MonthPicker extends Component{

}

class DatePicker extends Component{

}

class TimePicker extends Component{

}

export default class ReactNativeDateTimePicker extends Component{
    render(){
        return (
            <View>
                <ScrollingComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: "white",
      fontSize: 24,
      marginBottom: 31,
    },
});