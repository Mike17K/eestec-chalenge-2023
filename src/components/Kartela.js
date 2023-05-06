import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const star = require("../../assets/star.png");
const loc = require("../../assets/location-pin.png");
const Eikona = require("../../assets/372551.jpg");

const Kartela = ({
  id,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
  navigation
}) => {

  urls = [
    { src: 'https://i.imgur.com/UYiroysl.jpg' },
    { src: 'https://i.imgur.com/UPrs1EWl.jpg' },
    { src: 'https://i.imgur.com/MABUbpDl.jpg' },
    { src: 'https://i.imgur.com/KZsmUi2l.jpg' },
    { src: 'https://i.imgur.com/2nCt3Sbl.jpg' }
  ]

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ScreenSight', { discription: "discription . . .", shightTitle: "lol", images: urls })}>
      <Image source={Eikona} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingContainer}>
          <Image source={star} style={styles.ratingImage} />
          <Text style={styles.rating}>
            <Text style={styles.green}>{rating}</Text>
            <Text style={styles.genre}>{genre}</Text>
          </Text>
        </View>
        <View style={styles.addressContainer}>
          <Image source={loc} style={styles.addressImage} />
          <Text style={styles.address}>Nearby {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 360,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginRight: 3,
  },

  image: {
    height: 200,
    width: 360,
    borderRadius: 2,
  },

  textContainer: {
    padding: 8,
    paddingHorizontal: 16,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 8,
  },

  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  ratingImage: {
    height: 16,
    width: 16,
    opacity: 0.5,
  },

  rating: {
    fontSize: 12,
    color: '#717171',
  },

  green: {
    color: '#50c878',
  },

  genre: {
    fontSize: 12,
    color: '#717171',
    marginLeft: 4,
  },

  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  addressImage: {
    height: 18,
    width: 18,
    opacity: 0.4,
  },

  address: {
    fontSize: 12,
    color: '#717171',
    marginLeft: 4,
  },
})

export default Kartela