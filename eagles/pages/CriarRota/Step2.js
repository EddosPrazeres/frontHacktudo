import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import styles from "./CriarRota.js";

import step2 from '../../assets/step2.png'

export default class Step2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderSecond = (navigate) => {
        return <View  style={styles.SecondView}> 
           <Image source={step2} style={styles.SecondViewImage} />
           <Text style={styles.SecondViewTitle}>Estamos criando sua rota!</Text>
           <Text style={styles.SecondViewText}>Ela será personalizada  pra seu desejo!</Text>
        </View>
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                { this.renderSecond() }
            </View>
        );
    }
}
