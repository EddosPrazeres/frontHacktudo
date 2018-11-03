import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class SuaPage extends Component {
  static navigationOptions = {
    title: 'Sua Rota',
    headerLeft: <Text>Editar</Text>,
    headerRight:  <Text>Filtrar</Text>
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <View style={styles.subHeaderItem}>
            <Text style={styles.subHeaderItemTitle}>Uber</Text>
            <Text style={styles.subHeaderItemSubTitle}>12m</Text> 
            <Text style={styles.subHeaderItemFooter}>Ir ao app</Text> 
          </View>

          <View  style={styles.subHeaderItem}>
            <Text style={styles.subHeaderItemTitle}>Ônibus</Text>
            <Text style={styles.subHeaderItemSubTitle}>30m</Text> 
            <Text style={styles.subHeaderItemFooter}>Ir ao maps</Text> 
          </View>

          <View  style={styles.subHeaderItem}>
            <Text style={styles.subHeaderItemTitle}>Bike</Text>
            <Text style={styles.subHeaderItemSubTitle}> 50m</Text> 
            <Text style={styles.subHeaderItemFooter}>Ir ao maps</Text> 
          </View>
        </View>

        <View style={styles.map}></View>

        <View style={styles.list}>

          <View style={styles.listItem}> 
            <View style={styles.listItemLeft}>
              <View style={styles.listItemLeftStart}></View>
              <View style={styles.listItemLeftFinish}>
                <Text>Bar do Adão</Text>
                <Text>Barra da Tijuca</Text>
              </View>
            </View>

            <View style={styles.listItemRight}>
              <View>
                <Text>5</Text>
                <View></View>
              </View>
              <Text>$$$</Text>
            </View>
          </View>

          <View style={styles.listItem}> 
            <View style={styles.listItemLeft}>
              <View style={styles.listItemLeftStart}></View>
              <View style={styles.listItemLeftFinish}>
                <Text>Festa dp Arrpiba</Text>
                <Text>Barra da Tijuca</Text>
              </View>
            </View>
            <View style={styles.listItemRight}>
              <View >
                <Text>4</Text>
                <View></View>
              </View>
              <Text>$$$$</Text>
            </View>
          </View>

          <View style={styles.listItem}> 
            <View style={styles.listItemLeft}>
              <View style={styles.listItemLeftStart}></View>
              <View style={styles.listItemLeftFinish}>
                <Text>Boteco Quero Mais</Text>
                <Text>Barra da Tijuca</Text>
              </View>
            </View>
            <View style={styles.listItemRight}>
              <View>
                <Text>5</Text>
                <View></View>
              </View>
              <Text>$$</Text>
            </View>
          </View>

          <Text>CRIAR NOVA ROTA</Text>
          
          <View>
            <Text>Icone 1</Text>
            <Text>Icone 2</Text>
            <Text>Icone 3</Text>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  subHeader: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  subHeaderItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  subHeaderItemTitle: {

  },
  subHeaderItemSubTitle: {
    
  },
  subHeaderItemFooter: {
    textDecorationLine: 'underline',
    opacity: 0.8
  },

  map: {
    flex: 2,
    backgroundColor: 'orange'
  },

  list: {
    flex: 4,
    paddingVertical: 10
  }, 
  listItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent:'space-between'
  },
  listItemLeft: {
    flexDirection: 'row',
    backgroundColor: 'pink'
  },
  listItemLeftStart : {
    width: 40,
    backgroundColor: 'red'
  },
  listItemLeftFinish: {
    marginLeft: 10
  }, 
  listItemRight: {
    justifyContent: 'flex-start',
    backgroundColor: 'red' 
  },
});
