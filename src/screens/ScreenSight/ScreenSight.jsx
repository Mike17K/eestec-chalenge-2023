import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MapView from "react-native-maps";

const ScreenSight = (params) => {
  const { discription, shightTitle, images } = params;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Text>Logo</Text>
        </View>
        <View style={styles.user}></View>
      </View>

      <View style={styles.sightTitle}>
        <Text>{shightTitle}</Text>
      </View>

      <View style={styles.discription}>
        <Text>{discription}</Text>
      </View>

      <View style={styles.imagesslider}>
        {images.map((item, index) => {
          console.log(item);
          return (
            <View key={index}>
              <Image
                source={{ uri: item }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          );
        })}
      </View>

      <MapView
        style={{ width: "100%", height: "50%" }}
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
});

export default ScreenSight;
