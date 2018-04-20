import React,{ Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../common/header';
import axios from 'axios';

export default class AlbumListing extends Component {

    state = {};

    componentDidMount() {
        axios.get("http://13.127.171.76/api/sponsors")
        .then((response)=>{
            this.setState(response.data);
        })
        .catch((error)=>{
            console.log(error) 
        });
    }

    render() {
        return (
            <View style={styles.constainer}>
                <Header title="Albums"></Header>
                <View style={styles.albumListingContainer}>
                    <Text>{ this.state.athkar_room }</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    constainer:{
    },
    albumListingContainer:{
        backgroundColor: "#D1C4E9"
    },
});