import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import MapView from "react-native-maps";

/**
 Syntax for using this component
    
*/

const ScreenSight = ({ route }) => {
  const { discription, shightTitle, images } = route.params;

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.src }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Text>Logo</Text>
        </View>
        <View style={styles.user}>
          <Text>user</Text>
        </View>
      </View>

      <View style={styles.sightTitle}>
        <Text>{shightTitle}</Text>
      </View>

      <View style={styles.discription}>
        <Text>{discription}</Text>
      </View>

      <View style={styles.imagesslider}>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={20}
        />
      </View>

      <MapView
        style={{ width: "100%", height: "30%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "100%",
    height: "10%",
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imagesslider: {
    width: "100%",
    height: 280,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  image: {
    width: 250,
    height: 250,
    margin: 5,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ScreenSight;
