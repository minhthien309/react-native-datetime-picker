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
            <View>
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
                <View style={{flexDirection: 'column', flex: 2}}>
                   <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row', flex: 3}}>
                            <View style={{flex: 1}}>
                                <ScrollingComponent/>
                            </View>
                            <View style={{flex: 1}}>
                                <ScrollingComponent/>
                            </View>
                            <View style={{flex: 1}}>
                                <ScrollingComponent/>
                            </View>
                        </View>
                   </View>
                </View>
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