import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import styles from "./CriarRota.js";
import CheckBox from "react-native-check-box"
import ToggleSwitch from 'toggle-switch-react-native'
export default class CriarRota extends Component {
    
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

    renderTypeEvent = () => {
        return <View style={styles.typeEvent}>
            <Text style={styles.typeEventTitle}>Tipo de Evento</Text>
            {
                this.state.checkboxType.map((item, index)=> {
                    return <CheckBox
                        style={{paddingBottom: 10}}
                        checkBoxColor='#6800c1'
                        onClick={(e)=>{
                            var newArray = this.state.checkboxType.filter((current)=> {
                                if (current.title == item.title) {
                                    current.value = !item.value
                                }
                                return current;
                            })
                            this.setState({checkboxType: newArray})
                        }}
                        isChecked={item.value}
                        leftText={item.title}
                        key={item.title}
                    />
                })
            }
        </View>
    }

    renderRange = () => {
        return <View style={styles.typeDefault}>
            <Text>Quão longe está disposto a ir? </Text>
        </View>
    }

    renderPrice = () => {
        return <View style={styles.typeDefault}>
            <Text style={styles.typeDefaulTitle}>Preço </Text>
            {
                this.state.checkboxPrice.map((item, index)=> {
                    return <CheckBox
                        style={{paddingBottom: 10}}
                        checkBoxColor='#6800c1'
                        onClick={(e)=>{
                            var newArray = this.state.checkboxPrice.filter((current)=> {
                                if (current.title == item.title) {
                                    current.value = !item.value
                                }
                                return current;
                            })
                            this.setState({checkboxPrice: newArray})
                        }}
                        isChecked={item.value}
                        leftText={item.title}
                        key={item.title}
                    />
                })
            }
        </View>
    }

    rendeOutdoor = () => {
        return <View style={styles.typeToggle}>
            <Text>
                Ao ar livre
            </Text>
            <ToggleSwitch
                isOn={false}
                onColor='#6800c1'
                offColor='#6800c1'
                //labelStyle={{color: 'black', fontWeight: '900'}}
                size='small'
                onToggle={ (isOn) => console.log('changed to : ', isOn) }
            />
        </View>
    }

    renderMusic = () => {
        return <View  style={styles.typeDefault}>
            <Text style={styles.typeDefaulTitle}>Música </Text>
            {
                this.state.checkboxMusic.map((item, index)=> {
                    return <CheckBox
                        style={{paddingBottom: 10}}
                        checkBoxColor='#6800c1'
                        onClick={(e)=>{
                            var newArray = this.state.checkboxMusic.filter((current)=> {
                                if (current.title == item.title) {
                                    current.value = !item.value
                                }
                                return current;
                            })
                            this.setState({checkboxMusic: newArray})
                        }}
                        isChecked={item.value}
                        leftText={item.title}
                        key={item.title}
                    />
                })
            }
        </View>
    }

    renderAge = () => {
        return <View style={styles.typeDefault}>
            <Text style={styles.typeDefaulTitle}>Faixa etária média dos frequentadores? </Text>
        </View>
    }

    renderButtons = (navigate) => {
       

        return <View>
            <TouchableOpacity
                style={styles.loginScreenSurprise}
                onPress={() => navigate('Step2')}
                underlayColor='#fff'>
                <Text style={styles.surprise}>ME SURPREENDA</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginScreenSkip}
                onPress={() => navigate('Perfil')}
                underlayColor='#fff'>
                <Text style={styles.skip}>Pular</Text>
            </TouchableOpacity>
        </View>
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <ScrollView>
                    <View style={styles.container}>
                        { this.renderTypeEvent() }
                        { this.renderRange() }
                        { this.renderPrice() }
                        { this.rendeOutdoor() }
                        { this.renderMusic() }
                        { this.renderAge() }
                        
                    </View>
                </ScrollView>
                { this.renderButtons(navigate) }
            </SafeAreaView>

        );
    }
}
