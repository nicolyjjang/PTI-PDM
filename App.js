import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Menu = (props) => (
  <View style={styles.menuItem}>
    <View style={styles.itemDetails}>
      <Text style={styles.nome}>{props.item.nome}</Text>
      <View style={styles.caloriesContainer}>
        <FontAwesome5 name="fire" size={24} color="#ff7f00" style={styles.icon} />
        <Text style={styles.calories}>{props.item.calorias} Calories</Text>
      </View>
      <Text style={styles.precos}> $ {props.item.preco.toFixed(2)}</Text>
    </View>
    <Image source={props.item.imagem} style={styles.itemImage} />
  </View>
);

const App = () => {
  const itensMenu = [
    { nome: 'Beef Burger', calorias: 70, preco: 12.00, imagem: require('./assets/hamburguer.jpg') },
    { nome: 'Pancakes', calorias: 60, preco: 8.00, imagem: require('./assets/panqueca.jpg') },
  ];

  return (
    <View style={styles.container}>
      {itensMenu.map((item, index) => (
        <Menu key={index} item={item} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  itemDetails: {
    flex: 1,
    padding: 25,
  },
  caloriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  nome: {
    fontWeight: '500',
    marginBottom: 4,
  },
  calories: {
    color: 'gray',
    marginRight: 5,
  },
  precos: {
    color: 'gold',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
    fontSize: 16,
  },
});

export default App;
