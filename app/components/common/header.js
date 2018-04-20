import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000" >
            </StatusBar>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7E57C2"
    },
    headerContainer :{
        height:44,
        marginTop: 20,
        backgroundColor: "#673AB7",
        shadowColor: "#000",
        shadowOffset:{  width: 0,  height: 2  },
        shadowOpacity: 0.4,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitle: {
        color: "#ffffff",
        fontSize: 18,
    }
});

export default Header;