import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import iconPerfil from '../../assets/perfil.jpg'
import iconMedalha from '../../assets/Badge.png'
import iconSeta from '../../assets/Setadireita.png'
import styles from './Perfil.js';
export default class Perfil extends Component {

    renderSubHeader = () => {
        return  <View style={styles.subHeader}> 
            <Image style={styles.subHeaderImage} source={iconPerfil} />
            <View style={styles.subHeaderItem}> 
                <Text style={styles.subHeaderItemTitle}>Kiara Amaral</Text>
                <Text style={styles.subHeaderItemSubTitle}>Nova na cidade</Text>
            </View>
            <Image style={styles.subHeaderItemIcon} source={iconMedalha} />
        </View>
    }

    renderTabsPerfil = () => {
        return <View style={styles.tabsPerfil}>

        </View>

    }

    renderButtons = () => {
        return <View style={styles.buttons}> 

        </View>
    }
    renderItensMap = () => {
        return <View style={styles.listItem}>
            <View style={styles.listItemMap}></View>
            <View style={styles.listItemMapFooter}>
                <View  style={styles.listItemMapFooterLeft}> 
                    <Text  style={styles.listItemMapFooterLeftTitle}>
                        Text 1
                    </Text>

                    <Text  style={styles.listItemMapFooterLeftSubtitle}>
                        Text 2
                    </Text>
                </View>
                <Image source ={iconSeta}  style={styles.listItemMapFooterRight}/>
            </View>
        </View>
    }

    renderListMap = () => {
        return <View  style={styles.list}>
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => {
                        return this.renderItensMap()
                    }
                }     
            />
        </View>
    }

    
    render() {
        return (
        <View style={styles.container}>
            { this.renderSubHeader() }

            { this.renderTabsPerfil() }
            
            { this.renderButtons() }
           
            { this.renderListMap() }

        </View>
        );
    }
}
