import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import styles from "./CriarRota.js";

import step2 from '../../assets/step2.png'

export default class Step2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            checkboxType: [
                {"title": "Arte", "value": false }, 
                {"title": "Bares", "value": false }, 
                {"title": "Festas", "value": false }, 
                {"title": "Feiras", "value": false }, 
                {"title": "Gastronômia", "value": false }, 
                {"title": "Shows", "value": true }, 
                {"title": "Teatro/Cinema", "value": false },  
            ],
            checkboxPrice: [
                {"title": "$ até $$", "value": false }, 
                {"title": "$$ até $$$$", "value": false }, 
                {"title": "$$$$$", "value": false }
            ],
            checkboxMusic: [
                {"title": "Rock", "value": false }, 
                {"title": "Samba", "value": false }, 
                {"title": "Rap", "value": false },
                {"title": "Pagode", "value": false }
            ]
        };
    }

    renderButtons = (navigate) => {
       

        return <View>
           <Image source={step2} style={styles.img} />
           <Text>Estamos criando sua rota! Ela será personalizada  pra seu desejo!</Text>
        </View>
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                { this.renderButtons() }
                
            </View>
        );
    }
}
